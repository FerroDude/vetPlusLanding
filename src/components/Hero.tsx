import { useT } from '../i18n'
import './Hero.css'

export function Hero() {
  const t = useT()

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {t.hero.badge}
          </p>
          <h1 id="hero-heading" className="hero__title">
            {t.hero.title}{' '}
            <em>{t.hero.titleEm}</em>
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__ctas">
            <a href="#cta" className="btn btn-primary btn-lg">
              {t.hero.ctaPrimary}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="hero__trust">{t.hero.trust}</p>
          <dl className="hero__stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt className="hero__stat-value">{stat.value}</dt>
                <dd className="hero__stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--red" />
              <span className="hero__card-dot hero__card-dot--yellow" />
              <span className="hero__card-dot hero__card-dot--green" />
              <span className="hero__card-title">{t.hero.mock.inboxTitle}</span>
            </div>
            <ul className="hero__messages">
              {t.hero.mock.messages.map((msg, i) => (
                <li
                  key={msg.name}
                  className={`hero__message ${i === 0 ? 'hero__message--active' : ''}`}
                >
                  <span className="hero__avatar">
                    {msg.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </span>
                  <span className="hero__message-body">
                    <strong>{msg.name}</strong>
                    <span>{msg.text}</span>
                  </span>
                  {i === 0 && <span className="hero__status">{t.hero.mock.statusNew}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__card hero__card--float">
            <span className="hero__float-icon" aria-hidden="true">
              ⟳
            </span>
            <div>
              <strong>{t.hero.mock.syncTitle}</strong>
              <p>{t.hero.mock.syncDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
