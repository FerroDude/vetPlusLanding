import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    title: 'VetPlus — Client Communication for Veterinary Clinics',
    description:
      'VetPlus integrates with your clinic software so you can easily message customers, send reminders, and share updates — without replacing your PIMS.',
  },
  header: {
    logoAria: 'VetPlus home',
    navAria: 'Main',
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
    viewPlans: 'View plans',
    startTrial: 'Start free trial',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langEn: 'EN',
    langPt: 'PT',
    switchLang: 'Language',
  },
  hero: {
    badge: 'Plugs into the software you already use',
    title: 'Talk to your clients —',
    titleEm: 'without the phone tag',
    subtitle:
      'VetPlus integrates with your clinic\'s existing software so you can message pet owners, send reminders, and share updates — all from one inbox, without changing how your team works.',
    ctaPrimary: 'Start 14-day free trial',
    ctaSecondary: 'See how it connects',
    trust: 'No credit card required · Keep your current PIMS · Cancel anytime',
    stats: [
      { value: '2,400+', label: 'Clinics use VetPlus' },
      { value: '60%', label: 'Fewer phone calls' },
      { value: '15 min', label: 'Average setup time' },
    ],
    mock: {
      inboxTitle: 'Client messages',
      statusNew: 'New',
      messages: [
        { name: 'Sarah M.', text: 'Can we reschedule Luna\'s checkup?' },
        { name: 'James T.', text: 'Thanks for the lab results update!' },
        { name: 'Maria K.', text: 'Reminder sent · Max vaccination tomorrow' },
        { name: 'David L.', text: 'Post-visit care instructions delivered' },
      ],
      syncTitle: 'Synced with your PIMS',
      syncDesc: 'Appointments & client data stay up to date',
    },
  },
  features: {
    label: 'Features',
    title: 'Better client communication — on top of what you have',
    subtitle:
      'VetPlus is not another practice management system. It\'s a communication layer that sits on your existing software and makes talking to customers effortless for your whole team.',
    integrationsAria: 'Supported integrations',
    integrationsLabel: 'Works with',
    integrationsMore: '+ more',
    items: [
      {
        title: 'Integrates with your PIMS',
        description:
          'VetPlus connects to the clinic software you already rely on — syncing clients, pets, and appointments so you never double-enter data.',
      },
      {
        title: 'Two-way client messaging',
        description:
          'Reply to pet owners by SMS, email, or in-app chat from one shared inbox — every conversation tied to the right patient record.',
      },
      {
        title: 'Automated reminders',
        description:
          'Appointment confirmations, vaccine due dates, and follow-ups go out automatically — pulled straight from your existing schedule.',
      },
      {
        title: 'Client updates & documents',
        description:
          'Share lab results, care instructions, and invoices securely — clients get notified instantly without calling the front desk.',
      },
      {
        title: 'Team inbox',
        description:
          'Front desk, technicians, and vets see the same thread history. Assign conversations and hand off without losing context.',
      },
      {
        title: 'Secure by design',
        description:
          'Encrypted messaging, role-based access, and audit trails keep client communications compliant and under your control.',
      },
    ],
  },
  howItWorks: {
    label: 'How it works',
    title: 'Live in an afternoon — keep the tools you trust',
    subtitle:
      'You shouldn\'t have to switch practice software just to communicate better. VetPlus layers on top of what you already use.',
    steps: [
      {
        title: 'Connect your clinic software',
        description:
          'Link VetPlus to your existing PIMS in minutes. We sync clients, pets, and appointments — no rip-and-replace, no data migration headaches.',
      },
      {
        title: 'Set up your team inbox',
        description:
          'Invite front desk, techs, and vets. Choose message templates, reminder rules, and who gets notified — everyone stays on the same page.',
      },
      {
        title: 'Start reaching customers',
        description:
          'Message pet owners from day one. Automated reminders go out, replies land in one inbox, and phone volume drops while satisfaction goes up.',
      },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    title: 'Clinics that communicate better — without switching systems',
    items: [
      {
        quote:
          'We didn\'t want to change our PIMS — we just wanted clients to stop calling ten times a day. VetPlus plugged in and our front desk finally breathes again.',
        name: 'Dr. Sarah Chen',
        role: 'Owner, Paws & Claws Veterinary',
        initials: 'SC',
      },
      {
        quote:
          'Setup took one afternoon. Reminders go out automatically from our schedule, and when owners reply, the whole team sees it in one place.',
        name: 'Marcus Rivera',
        role: 'Practice Manager, Valley Animal Hospital',
        initials: 'MR',
      },
      {
        quote:
          'Sharing lab results used to mean phone tag. Now we send a secure link, clients get a notification, and they message us back if they have questions.',
        name: 'Dr. Emily Okonkwo',
        role: 'Lead Veterinarian, Greenfield Vet Care',
        initials: 'EO',
      },
    ],
  },
  pricing: {
    label: 'Pricing',
    title: 'Simple pricing for better client communication',
    subtitle:
      'Every plan includes a 14-day free trial and PIMS integration setup. Save 20% with annual billing.',
    currency: '$',
    perMonth: '/mo',
    custom: 'Custom',
    badgePopular: 'Most popular',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        price: '79',
        description: 'For small clinics ready to modernize client communication.',
        features: [
          'PIMS integration',
          'Two-way messaging (SMS & email)',
          'Automated appointment reminders',
          'Up to 3 team members',
          'Email support',
        ],
        cta: 'Start free trial',
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '149',
        description: 'For busy practices that need a full team inbox and automation.',
        features: [
          'Everything in Starter',
          'Unlimited team members',
          'Message templates & campaigns',
          'Document & lab result sharing',
          'Client conversation history',
          'Priority support',
        ],
        cta: 'Start free trial',
        highlighted: true,
        badge: 'Most popular',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'custom',
        description: 'For multi-location groups with custom integration needs.',
        features: [
          'Multi-location dashboard',
          'Custom PIMS connectors',
          'Dedicated onboarding',
          'SLA & success manager',
          'Advanced permissions',
        ],
        cta: 'Contact sales',
      },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Questions? We\'ve got answers.',
    subtitleBefore: 'Still unsure?',
    subtitleLink: 'Reach out to our team',
    subtitleAfter: '— we typically respond within a few hours.',
    items: [
      {
        q: 'Do I have to replace my current clinic software?',
        a: 'No. VetPlus is designed to integrate with your existing PIMS — not replace it. Your team keeps using the tools they know; VetPlus adds a modern communication layer on top.',
      },
      {
        q: 'Which practice management systems do you support?',
        a: 'We integrate with major veterinary platforms including ezyVet, Cornerstone, AVImark, Provet, and HVMS. If yours isn\'t listed, contact us — we add new connectors regularly.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most clinics connect their software and send their first client message the same day. Our team guides you through integration and inbox setup — typically under an hour for Starter plans.',
      },
      {
        q: 'How do clients receive messages?',
        a: 'Pet owners get SMS, email, or in-app notifications based on their preferences. Replies come back to your shared VetPlus inbox, linked to the correct client and patient in your PIMS.',
      },
      {
        q: 'Is client messaging secure?',
        a: 'Yes. All messages are encrypted in transit and at rest. Role-based permissions control who can view or send communications, and audit logs help you stay compliant.',
      },
    ],
  },
  cta: {
    title: 'Ready to reach your customers the easy way?',
    subtitle:
      'Join clinics using VetPlus to communicate with pet owners — without changing the software they already run on.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourclinic.com',
    submit: 'Get started free',
    note: '14-day trial · Free integration setup · Works with your existing PIMS',
    alert: 'Thanks! We\'ll reach out at {{email}} to get you started.',
  },
  footer: {
    tagline:
      'Client communication software that integrates with your clinic\'s existing tools — so you connect with customers, not replace your workflow.',
    navAria: 'Footer',
    copyright: 'All rights reserved.',
    groups: [
      { title: 'Product', items: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
      { title: 'Company', items: ['About', 'Careers', 'Blog', 'Contact'] },
      { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
    ],
  },
}
