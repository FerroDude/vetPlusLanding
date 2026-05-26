import { useT } from '../i18n'
import './Benefits.css'

export function Benefits() {
  const t = useT()

  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <div className="benefits__header">
          <span className="section-label">{t.benefits.label}</span>
          <h2 className="section-title">{t.benefits.title}</h2>
          <p className="section-subtitle">{t.benefits.subtitle}</p>
        </div>
        <div className="benefits__grid">
          <div className="benefits__column">
            <h3 className="benefits__column-title">{t.benefits.practicalTitle}</h3>
            <ul className="benefits__list">
              {t.benefits.practical.map((item) => (
                <li key={item.title} className="benefits__card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="benefits__column">
            <h3 className="benefits__column-title">{t.benefits.emotionalTitle}</h3>
            <ul className="benefits__list">
              {t.benefits.emotional.map((item) => (
                <li key={item.title} className="benefits__card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
