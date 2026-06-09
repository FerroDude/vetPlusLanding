import type { Messages } from '../i18n/types'
import { filterEditorVisiblePaths } from './visibleFields'

export type EditSection = {
  id: string
  label: string
  paths: string[]
}

/** Field and section order matches the landing page top to bottom. */
export function buildEditSections(messages: Messages, allPaths: string[]): EditSection[] {
  const heroRows = messages.hero.mock.rows.flatMap((_, i) => [
    `hero.mock.rows.${i}.label`,
    `hero.mock.rows.${i}.detail`,
  ])

  const practicalBenefits = messages.benefits.practical.flatMap((_, i) => [
    `benefits.practical.${i}.title`,
    `benefits.practical.${i}.description`,
  ])

  const emotionalBenefits = messages.benefits.emotional.flatMap((_, i) => [
    `benefits.emotional.${i}.title`,
    `benefits.emotional.${i}.description`,
  ])

  const featureItems = messages.features.items.flatMap((_, i) => [
    `features.items.${i}.title`,
    `features.items.${i}.description`,
  ])

  const audienceCards = messages.audiences.cards.flatMap((card, i) => [
    `audiences.cards.${i}.name`,
    `audiences.cards.${i}.description`,
    ...card.features.map((_, fi) => `audiences.cards.${i}.features.${fi}`),
    `audiences.cards.${i}.cta`,
  ])

  const steps = messages.howItWorks.steps.flatMap((_, i) => [
    `howItWorks.steps.${i}.title`,
    `howItWorks.steps.${i}.description`,
  ])

  const faqItems = messages.faq.items.flatMap((_, i) => [`faq.items.${i}.q`, `faq.items.${i}.a`])

  const footerGroups = messages.footer.groups.flatMap((group, gi) => [
    `footer.groups.${gi}.title`,
    ...group.items.map((_, ii) => `footer.groups.${gi}.items.${ii}`),
  ])

  const sections: EditSection[] = [
    {
      id: 'header',
      label: 'Cabeçalho',
      paths: [
        'header.nav.benefits',
        'header.nav.features',
        'header.nav.forYou',
        'header.nav.howItWorks',
        'header.nav.faq',
        'header.learnMore',
        'header.cta',
        'header.langEn',
        'header.langPt',
      ],
    },
    {
      id: 'hero',
      label: 'Hero',
      paths: [
        'hero.badge',
        'hero.title',
        'hero.titleEm',
        'hero.lead',
        'hero.supporting',
        'hero.ctaPrimary',
        'hero.ctaSecondary',
        'hero.mock.appTitle',
        ...heroRows,
        'hero.mock.floatTitle',
        'hero.mock.floatDesc',
      ],
    },
    {
      id: 'benefits',
      label: 'Benefícios',
      paths: [
        'benefits.label',
        'benefits.title',
        'benefits.subtitle',
        'benefits.practicalTitle',
        ...practicalBenefits,
        'benefits.emotionalTitle',
        ...emotionalBenefits,
      ],
    },
    {
      id: 'features',
      label: 'Funcionalidades',
      paths: ['features.label', 'features.title', 'features.subtitle', ...featureItems],
    },
    {
      id: 'audiences',
      label: 'Para quem',
      paths: [
        'audiences.label',
        'audiences.title',
        'audiences.subtitle',
        ...audienceCards,
      ],
    },
    {
      id: 'howItWorks',
      label: 'Como funciona',
      paths: ['howItWorks.label', 'howItWorks.title', 'howItWorks.subtitle', ...steps],
    },
    {
      id: 'faq',
      label: 'FAQ',
      paths: [
        'faq.label',
        'faq.title',
        'faq.subtitleBefore',
        'faq.subtitleLink',
        'faq.subtitleAfter',
        ...faqItems,
      ],
    },
    {
      id: 'cta',
      label: 'Chamada à ação',
      paths: [
        'cta.title',
        'cta.subtitle',
        'cta.emailPlaceholder',
        'cta.submit',
        'cta.note',
      ],
    },
    {
      id: 'footer',
      label: 'Rodapé',
      paths: ['footer.tagline', ...footerGroups, 'footer.copyright'],
    },
  ]

  const pathSet = new Set(filterEditorVisiblePaths(allPaths))
  const used = new Set<string>()

  const ordered = sections
    .map((section) => {
      const paths = section.paths.filter((path) => {
        if (!pathSet.has(path)) return false
        used.add(path)
        return true
      })
      return { ...section, paths }
    })
    .filter((section) => section.paths.length > 0)

  const remaining = filterEditorVisiblePaths(allPaths).filter((path) => !used.has(path))
  if (remaining.length > 0) {
    ordered.push({ id: 'other', label: 'Outros', paths: remaining })
  }

  return ordered
}
