import { useT } from '../i18n'
import './Testimonials.css'

export function Testimonials() {
  const t = useT()

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">{t.testimonials.label}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </div>
        <ul className="testimonials__grid">
          {t.testimonials.items.map((item) => (
            <li key={item.name} className="testimonials__card">
              <blockquote>
                <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer className="testimonials__author">
                  <span className="testimonials__avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <div>
                    <cite className="testimonials__name">{item.name}</cite>
                    <span className="testimonials__role">{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
