import { useT } from '../i18n'
import './Footer.css'

export function Footer() {
  const t = useT()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 4c-2 6-8 8-8 14a8 8 0 1 0 16 0c0-6-6-8-8-14Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            VetPlus
          </a>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>
        <nav className="footer__nav" aria-label={t.footer.navAria}>
          {t.footer.groups.map((group) => (
            <div key={group.title} className="footer__col">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} VetPlus. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
