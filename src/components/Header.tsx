import { useState, useEffect } from 'react'
import { useI18n } from '../i18n'
import type { Locale } from '../i18n'
import './Header.css'

const navHrefs = [
  { href: '#benefits', key: 'benefits' as const },
  { href: '#features', key: 'features' as const },
  { href: '#audiences', key: 'forYou' as const },
  { href: '#how-it-works', key: 'howItWorks' as const },
  { href: '#faq', key: 'faq' as const },
]

function LangSwitcher({
  className,
  locale,
  onPick,
  labels,
}: {
  className?: string
  locale: Locale
  onPick: (locale: Locale) => void
  labels: { en: string; pt: string; switchLang: string }
}) {
  return (
    <div className={className} role="group" aria-label={labels.switchLang}>
      <button
        type="button"
        className={`header__lang-btn ${locale === 'en' ? 'header__lang-btn--active' : ''}`}
        aria-pressed={locale === 'en'}
        onClick={() => onPick('en')}
      >
        {labels.en}
      </button>
      <button
        type="button"
        className={`header__lang-btn ${locale === 'pt-PT' ? 'header__lang-btn--active' : ''}`}
        aria-pressed={locale === 'pt-PT'}
        onClick={() => onPick('pt-PT')}
      >
        {labels.pt}
      </button>
    </div>
  )
}

export function Header() {
  const { locale, setLocale, messages: t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1181px)')
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const pickLocale = (next: Locale) => {
    setLocale(next)
    setMenuOpen(false)
  }

  const langLabels = {
    en: t.header.langEn,
    pt: t.header.langPt,
    switchLang: t.header.switchLang,
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo" aria-label={t.header.logoAria}>
          <span className="header__logo-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4c-2 6-8 8-8 14a8 8 0 1 0 16 0c0-6-6-8-8-14Z"
                fill="currentColor"
              />
              <circle cx="12" cy="20" r="1.5" fill="white" />
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </svg>
          </span>
          Vet+
        </a>

        <nav
          id="header-nav"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label={t.header.navAria}
        >
          <ul className="header__links">
            {navHrefs.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {t.header.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <LangSwitcher
              className="header__lang header__lang--in-nav"
              locale={locale}
              onPick={pickLocale}
              labels={langLabels}
            />
            <a href="#benefits" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
              {t.header.learnMore}
            </a>
            <a href="#cta" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              {t.header.cta}
            </a>
          </div>
        </nav>

        <div className="header__toolbar">
          <LangSwitcher
            className="header__lang header__lang--in-toolbar"
            locale={locale}
            onPick={pickLocale}
            labels={langLabels}
          />
          <a href="#cta" className="btn btn-primary header__cta-bar">
            {t.header.cta}
          </a>
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="header-nav"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
