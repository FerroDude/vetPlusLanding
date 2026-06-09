import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  applyFlatOverrides,
  mergeContentOverrides,
  mergeLocaleOverrides,
  type ContentOverrides,
} from '../content/flatten'
import {
  clearLocalOverrides,
  loadDeployedOverrides,
  loadLocalOverrides,
  saveLocalOverrides,
} from '../content/overrides'
import { en } from './locales/en'
import { ptPT } from './locales/pt-PT'
import type { Locale, Messages } from './types'

const STORAGE_KEY = 'vetplus-locale'

const catalogs: Record<Locale, Messages> = {
  en,
  'pt-PT': ptPT,
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'pt-PT'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && stored in catalogs) return stored
  return 'pt-PT'
}

type I18nContextValue = {
  locale: Locale
  messages: Messages
  setLocale: (locale: Locale) => void
  interpolate: (template: string, vars: Record<string, string>) => string
  contentOverrides: ContentOverrides
  saveContentOverrides: (overrides: ContentOverrides) => void
  resetContentOverrides: () => void
  exportContentOverrides: () => ContentOverrides
  setPreviewOverrides: (overrides: ContentOverrides) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)
  const [fileOverrides, setFileOverrides] = useState<ContentOverrides>({})
  const [localOverrides, setLocalOverrides] = useState<ContentOverrides>(() =>
    loadLocalOverrides(),
  )
  const [previewOverrides, setPreviewOverrides] = useState<ContentOverrides>({})

  useEffect(() => {
    loadDeployedOverrides().then(setFileOverrides)
  }, [])

  const contentOverrides = useMemo(
    () => mergeContentOverrides(fileOverrides, localOverrides),
    [fileOverrides, localOverrides],
  )

  const messages = useMemo(() => {
    let result = mergeLocaleOverrides(catalogs[locale], fileOverrides, localOverrides, locale)
    const preview = previewOverrides[locale]
    if (preview && Object.keys(preview).length > 0) {
      result = applyFlatOverrides(result, preview)
    }
    return result
  }, [locale, fileOverrides, localOverrides, previewOverrides])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const saveContentOverrides = useCallback((overrides: ContentOverrides) => {
    saveLocalOverrides(overrides)
    setLocalOverrides(overrides)
  }, [])

  const resetContentOverrides = useCallback(() => {
    clearLocalOverrides()
    setLocalOverrides({})
  }, [])

  const exportContentOverrides = useCallback(
    () => mergeContentOverrides(fileOverrides, localOverrides),
    [fileOverrides, localOverrides],
  )

  const interpolate = useCallback(
    (template: string, vars: Record<string, string>) =>
      Object.entries(vars).reduce(
        (str, [key, value]) => str.replaceAll(`{{${key}}}`, value),
        template,
      ),
    [],
  )

  useEffect(() => {
    document.documentElement.lang = locale === 'pt-PT' ? 'pt-PT' : 'en'
    document.title = messages.meta.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = messages.meta.description
  }, [locale, messages.meta.title, messages.meta.description])

  const value = useMemo(
    () => ({
      locale,
      messages,
      setLocale,
      interpolate,
      contentOverrides,
      saveContentOverrides,
      resetContentOverrides,
      exportContentOverrides,
      setPreviewOverrides,
    }),
    [
      locale,
      messages,
      setLocale,
      interpolate,
      contentOverrides,
      saveContentOverrides,
      resetContentOverrides,
      exportContentOverrides,
      setPreviewOverrides,
    ],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function useT() {
  return useI18n().messages
}

export { catalogs }
