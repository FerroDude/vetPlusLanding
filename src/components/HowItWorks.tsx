import { useT } from '../i18n'
import './HowItWorks.css'

const stepNumbers = ['01', '02', '03']

export function HowItWorks() {
  const t = useT()

  return (
    <section id="how-it-works" className="section how">
      <div className="container how__inner">
        <div className="how__copy">
          <span className="section-label">{t.howItWorks.label}</span>
          <h2 className="section-title">{t.howItWorks.title}</h2>
          <p className="section-subtitle">{t.howItWorks.subtitle}</p>
        </div>
        <ol className="how__steps">
          {t.howItWorks.steps.map((item, i) => (
            <li key={stepNumbers[i]} className="how__step">
              <span className="how__step-num">{stepNumbers[i]}</span>
              <div>
                <h3 className="how__step-title">{item.title}</h3>
                <p className="how__step-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
