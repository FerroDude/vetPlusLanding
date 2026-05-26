import { useT } from '../i18n'
import './Audiences.css'

export function Audiences() {
  const t = useT()

  return (
    <section id="audiences" className="section audiences">
      <div className="container">
        <div className="audiences__header">
          <span className="section-label">{t.audiences.label}</span>
          <h2 className="section-title">{t.audiences.title}</h2>
          <p className="section-subtitle">{t.audiences.subtitle}</p>
        </div>
        <ul className="audiences__grid">
          {t.audiences.cards.map((card, i) => (
            <li
              key={card.id}
              className={`audiences__card ${i === 0 ? 'audiences__card--owners' : 'audiences__card--clinics'}`}
            >
              <h3 className="audiences__name">{card.name}</h3>
              <p className="audiences__desc">{card.description}</p>
              <ul className="audiences__features">
                {card.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M16.5 5.5L8 14 3.5 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn btn-primary btn-lg">
                {card.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
