import { useI18n } from '../i18n'
import './CtaBanner.css'

export function CtaBanner() {
  const { messages: t, interpolate } = useI18n()

  return (
    <section id="cta" className="cta section">
      <div className="container">
        <div className="cta__card">
          <h2 className="cta__title">{t.cta.title}</h2>
          <p className="cta__subtitle">{t.cta.subtitle}</p>
          <form
            className="cta__form"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const email = String(new FormData(form).get('email') ?? '')
              if (email) {
                alert(interpolate(t.cta.alert, { email }))
                form.reset()
              }
            }}
          >
            <label htmlFor="cta-email" className="visually-hidden">
              {t.cta.emailLabel}
            </label>
            <input
              id="cta-email"
              type="email"
              name="email"
              placeholder={t.cta.emailPlaceholder}
              required
              autoComplete="email"
            />
            <button type="submit" className="btn btn-accent btn-lg">
              {t.cta.submit}
            </button>
          </form>
          <p className="cta__note">{t.cta.note}</p>
        </div>
      </div>
    </section>
  )
}
