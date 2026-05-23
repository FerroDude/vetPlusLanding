import { useState } from 'react'
import { useI18n } from '../i18n'
import './Faq.css'

export function Faq() {
  const { messages: t } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section faq">
      <div className="container faq__inner">
        <div className="faq__copy">
          <span className="section-label">{t.faq.label}</span>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">
            {t.faq.subtitleBefore}{' '}
            <a href="mailto:hello@vetplus.com" className="faq__link">
              {t.faq.subtitleLink}
            </a>{' '}
            {t.faq.subtitleAfter}
          </p>
        </div>
        <div className="faq__list" role="list">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="faq__item" role="listitem">
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq__answer ${isOpen ? 'faq__answer--open' : ''}`}>
                  <div className="faq__answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
