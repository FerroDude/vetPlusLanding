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
      pricing: string
      faq: string
    }
    viewPlans: string
    startTrial: string
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
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string
    stats: { value: string; label: string }[]
    mock: {
      inboxTitle: string
      statusNew: string
      messages: { name: string; text: string }[]
      syncTitle: string
      syncDesc: string
    }
  }
  features: {
    label: string
    title: string
    subtitle: string
    integrationsAria: string
    integrationsLabel: string
    integrationsMore: string
    items: { title: string; description: string }[]
  }
  howItWorks: {
    label: string
    title: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  testimonials: {
    label: string
    title: string
    items: { quote: string; name: string; role: string; initials: string }[]
  }
  pricing: {
    label: string
    title: string
    subtitle: string
    currency: string
    perMonth: string
    custom: string
    badgePopular: string
    plans: {
      id: string
      name: string
      price: string
      description: string
      features: string[]
      cta: string
      highlighted?: boolean
      badge?: string
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
