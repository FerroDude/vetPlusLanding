export type Locale = 'en' | 'pt-PT'

export type Messages = {
  meta: {
    title: string
    description: string
  }
  header: {
    logoAria: string
    navAria: string
    nav: {
      features: string
      howItWorks: string
      benefits: string
      forYou: string
      faq: string
    }
    learnMore: string
    cta: string
    openMenu: string
    closeMenu: string
    langEn: string
    langPt: string
    switchLang: string
  }
  hero: {
    badge: string
    title: string
    titleEm: string
    lead: string
    supporting: string
    ctaPrimary: string
    ctaSecondary: string
    mock: {
      appTitle: string
      rows: { label: string; detail: string }[]
      floatTitle: string
      floatDesc: string
    }
  }
  features: {
    label: string
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  howItWorks: {
    label: string
    title: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  benefits: {
    label: string
    title: string
    subtitle: string
    practicalTitle: string
    emotionalTitle: string
    practical: { title: string; description: string }[]
    emotional: { title: string; description: string }[]
  }
  audiences: {
    label: string
    title: string
    subtitle: string
    cards: {
      id: string
      name: string
      description: string
      features: string[]
      cta: string
    }[]
  }
  faq: {
    label: string
    title: string
    subtitleBefore: string
    subtitleLink: string
    subtitleAfter: string
    items: { q: string; a: string }[]
  }
  cta: {
    title: string
    subtitle: string
    emailLabel: string
    emailPlaceholder: string
    submit: string
    note: string
    alert: string
  }
  footer: {
    tagline: string
    navAria: string
    copyright: string
    groups: { title: string; items: string[] }[]
  }
}
