import { useT } from '../i18n'
import './Features.css'

const featureIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
]

const integrationNames = ['ezyVet', 'Cornerstone', 'AVImark', 'Provet', 'HVMS']

export function Features() {
  const t = useT()

  return (
    <section id="features" className="section features">
      <div className="container">
        <span className="section-label">{t.features.label}</span>
        <h2 className="section-title">{t.features.title}</h2>
        <p className="section-subtitle">{t.features.subtitle}</p>
        <div className="features__integrations" aria-label={t.features.integrationsAria}>
          <span className="features__integrations-label">{t.features.integrationsLabel}</span>
          <ul className="features__integrations-list">
            {integrationNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li>{t.features.integrationsMore}</li>
          </ul>
        </div>
        <ul className="features__grid">
          {t.features.items.map((feature, i) => (
            <li key={feature.title} className="features__card">
              <span className="features__icon">{featureIcons[i]}</span>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__desc">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
