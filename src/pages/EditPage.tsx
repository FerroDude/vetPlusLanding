import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildEditSections } from '../content/fieldOrder'
import { filterEditorVisiblePaths } from '../content/visibleFields'
import { flattenMessages } from '../content/flatten'
import { EDIT_PASSWORD, EDIT_SESSION_KEY } from '../config/edit'
import { catalogs, useI18n } from '../i18n'
import type { Locale } from '../i18n'
import { LandingPage } from './LandingPage'
import './EditPage.css'

function pathLabel(path: string): string {
  return path
    .split('.')
    .map((part) => (/^\d+$/.test(part) ? `#${Number(part) + 1}` : part))
    .join(' › ')
}

function isAuthenticated(): boolean {
  return sessionStorage.getItem(EDIT_SESSION_KEY) === '1'
}

export function EditPage() {
  const {
    locale,
    setLocale,
    contentOverrides,
    saveContentOverrides,
    resetContentOverrides,
    exportContentOverrides,
    setPreviewOverrides,
  } = useI18n()

  const [authed, setAuthed] = useState(isAuthenticated)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [editLocale, setEditLocale] = useState<Locale>(locale)
  const [draft, setDraft] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ header: true })
  const [mobilePanel, setMobilePanel] = useState<'preview' | 'edit'>('preview')

  const baseFlat = useMemo(
    () => flattenMessages(catalogs[editLocale]),
    [editLocale],
  )

  const currentFlat = useMemo(() => {
    const merged = { ...baseFlat, ...(contentOverrides[editLocale] ?? {}), ...draft }
    return merged
  }, [baseFlat, contentOverrides, editLocale, draft])

  const sections = useMemo(
    () => buildEditSections(catalogs[editLocale], filterEditorVisiblePaths(Object.keys(baseFlat))),
    [editLocale, baseFlat],
  )

  useEffect(() => {
    if (!authed) return
    setLocale(editLocale)
  }, [authed, editLocale, setLocale])

  useEffect(() => {
    if (!authed) return
    if (Object.keys(draft).length === 0) {
      setPreviewOverrides({})
      return
    }
    setPreviewOverrides({ [editLocale]: draft })
  }, [authed, draft, editLocale, setPreviewOverrides])

  useEffect(() => {
    return () => setPreviewOverrides({})
  }, [setPreviewOverrides])

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    if (password === EDIT_PASSWORD) {
      sessionStorage.setItem(EDIT_SESSION_KEY, '1')
      setAuthed(true)
      setLoginError('')
      return
    }
    setLoginError('Palavra-passe incorrecta.')
  }

  const handleLogout = () => {
    sessionStorage.removeItem(EDIT_SESSION_KEY)
    setPreviewOverrides({})
    setAuthed(false)
    setPassword('')
  }

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleFieldChange = (path: string, value: string) => {
    setDraft((prev) => ({ ...prev, [path]: value }))
    setStatus('')
  }

  const handleSave = () => {
    const next = { ...contentOverrides }
    const localeDraft = { ...(next[editLocale] ?? {}) }

    for (const [path, value] of Object.entries(draft)) {
      if (value === baseFlat[path]) {
        delete localeDraft[path]
      } else {
        localeDraft[path] = value
      }
    }

    if (Object.keys(localeDraft).length === 0) {
      delete next[editLocale]
    } else {
      next[editLocale] = localeDraft
    }

    saveContentOverrides(next)
    setDraft({})
    setPreviewOverrides({})
    setStatus('Alterações guardadas neste browser.')
  }

  const handleExport = () => {
    const payload = exportContentOverrides()
    const mergedLocale = { ...(payload[editLocale] ?? {}), ...draft }
    const base = flattenMessages(catalogs[editLocale])

    for (const [path, value] of Object.entries(mergedLocale)) {
      if (value === base[path]) {
        delete mergedLocale[path]
      }
    }

    const exportPayload = { ...payload }
    if (Object.keys(mergedLocale).length === 0) {
      delete exportPayload[editLocale]
    } else {
      exportPayload[editLocale] = mergedLocale
    }

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'content-overrides.json'
    anchor.click()
    URL.revokeObjectURL(url)
    setStatus('Ficheiro exportado. Envie-o para quem gere o site.')
  }

  const handleReset = () => {
    if (!window.confirm('Repor todo o texto editado neste browser?')) return
    resetContentOverrides()
    setDraft({})
    setPreviewOverrides({})
    setStatus('Texto reposto aos valores originais (neste browser).')
  }

  if (!authed) {
    return (
      <div className="edit-page edit-page--gate">
        <div className="edit-gate">
          <h1>Editor de conteúdo Vet+</h1>
          <p>Área reservada. Introduza a palavra-passe para editar o texto do site.</p>
          <form className="edit-gate__form" onSubmit={handleLogin}>
            <label htmlFor="edit-password">Palavra-passe</label>
            <input
              id="edit-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {loginError ? <p className="edit-status edit-status--error">{loginError}</p> : null}
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
          <Link to="/" className="edit-gate__back">
            ← Voltar ao site
          </Link>
        </div>
      </div>
    )
  }

  const hasDraft = Object.keys(draft).length > 0

  return (
    <div className="edit-page edit-page--split">
      <header className="edit-toolbar">
        <div className="edit-toolbar__inner">
          <div>
            <strong>Editor Vet+</strong>
          </div>
          <div className="edit-toolbar__actions">
            <div className="edit-lang" role="group" aria-label="Idioma a editar">
              <button
                type="button"
                className={editLocale === 'pt-PT' ? 'edit-lang__btn edit-lang__btn--active' : 'edit-lang__btn'}
                onClick={() => {
                  setEditLocale('pt-PT')
                  setDraft({})
                  setPreviewOverrides({})
                }}
              >
                PT
              </button>
              <button
                type="button"
                className={editLocale === 'en' ? 'edit-lang__btn edit-lang__btn--active' : 'edit-lang__btn'}
                onClick={() => {
                  setEditLocale('en')
                  setDraft({})
                  setPreviewOverrides({})
                }}
              >
                EN
              </button>
            </div>
            <button type="button" className="btn btn-secondary" onClick={handleSave} disabled={!hasDraft}>
              Guardar
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleExport}>
              Exportar JSON
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Repor
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
        {status ? <p className="edit-status">{status}</p> : null}
        <div className="edit-mobile-tabs" role="tablist" aria-label="Painel do editor">
          <button
            type="button"
            role="tab"
            aria-selected={mobilePanel === 'preview'}
            className={mobilePanel === 'preview' ? 'edit-mobile-tabs__btn edit-mobile-tabs__btn--active' : 'edit-mobile-tabs__btn'}
            onClick={() => setMobilePanel('preview')}
          >
            Pré-visualização
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mobilePanel === 'edit'}
            className={mobilePanel === 'edit' ? 'edit-mobile-tabs__btn edit-mobile-tabs__btn--active' : 'edit-mobile-tabs__btn'}
            onClick={() => setMobilePanel('edit')}
          >
            Editar texto
          </button>
        </div>
      </header>

      <div className="edit-layout">
        <aside
          className={`edit-main ${mobilePanel === 'edit' ? 'edit-main--visible' : ''}`}
          aria-label="Campos de edição"
        >
          {sections.map((section) => (
            <section key={section.id} className="edit-section">
              <button
                type="button"
                className="edit-section__toggle"
                aria-expanded={openSections[section.id] ?? false}
                onClick={() => toggleSection(section.id)}
              >
                {section.label}
                <span aria-hidden="true">{openSections[section.id] ? '−' : '+'}</span>
              </button>
              {openSections[section.id] ? (
                <div className="edit-section__body">
                  {section.paths.map((path) => {
                    const value = currentFlat[path] ?? ''
                    const isLong = value.length > 80 || value.includes('\n')
                    return (
                      <label key={path} className="edit-field">
                        <span className="edit-field__label">{pathLabel(path)}</span>
                        {isLong ? (
                          <textarea
                            rows={Math.min(6, Math.max(3, Math.ceil(value.length / 60)))}
                            value={value}
                            onChange={(e) => handleFieldChange(path, e.target.value)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => handleFieldChange(path, e.target.value)}
                          />
                        )}
                      </label>
                    )
                  })}
                </div>
              ) : null}
            </section>
          ))}
        </aside>

        <div
          className={`edit-preview ${mobilePanel === 'preview' ? 'edit-preview--visible' : ''}`}
          aria-label="Pré-visualização do site"
        >
          <div className="edit-preview__site">
            <LandingPage embedded />
          </div>
        </div>
      </div>
    </div>
  )
}
