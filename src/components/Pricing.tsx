import { useT } from '../i18n'
import './Pricing.css'

export function Pricing() {
  const t = useT()

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="pricing__header">
          <span className="section-label">{t.pricing.label}</span>
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>
        <ul className="pricing__grid">
          {t.pricing.plans.map((plan) => (
            <li
              key={plan.id}
              className={`pricing__card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}
            >
              {plan.badge && <span className="pricing__badge">{plan.badge}</span>}
              <h3 className="pricing__name">{plan.name}</h3>
              <p className="pricing__desc">{plan.description}</p>
              <div className="pricing__price">
                {plan.price === 'custom' ? (
                  <span className="pricing__amount pricing__amount--custom">
                    {t.pricing.custom}
                  </span>
                ) : (
                  <>
                    <span className="pricing__currency">{t.pricing.currency}</span>
                    <span className="pricing__amount">{plan.price}</span>
                    <span className="pricing__period">{t.pricing.perMonth}</span>
                  </>
                )}
              </div>
              <ul className="pricing__features">
                {plan.features.map((f) => (
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
              <a
                href="#cta"
                className={`btn btn-lg ${plan.highlighted ? 'btn-accent' : 'btn-primary'}`}
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
