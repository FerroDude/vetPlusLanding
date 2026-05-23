import type { Messages } from '../types'

/** European Portuguese (pt-PT) — concise copy for layout parity with EN */
export const ptPT: Messages = {
  meta: {
    title: 'VetPlus — Comunicação para clínicas veterinárias',
    description:
      'Integra o software da clínica. Mensagens, lembretes e atualizações aos clientes — sem mudar de PIMS.',
  },
  header: {
    logoAria: 'Início VetPlus',
    navAria: 'Principal',
    nav: {
      features: 'Funcionalidades',
      howItWorks: 'Como funciona',
      pricing: 'Preços',
      faq: 'FAQ',
    },
    viewPlans: 'Ver planos',
    startTrial: 'Teste gratuito',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    langEn: 'EN',
    langPt: 'PT',
    switchLang: 'Idioma',
  },
  hero: {
    badge: 'Liga ao software que já usa',
    title: 'Fale com clientes —',
    titleEm: 'sem telefonemas',
    subtitle:
      'O VetPlus integra o software da clínica. Mensagens, lembretes e atualizações numa caixa de entrada — sem mudar a rotina da equipa.',
    ctaPrimary: 'Teste grátis 14 dias',
    ctaSecondary: 'Ver integração',
    trust: 'Sem cartão · Mantém o PIMS · Cancele quando quiser',
    stats: [
      { value: '2 400+', label: 'Clínicas com VetPlus' },
      { value: '60%', label: 'Menos chamadas' },
      { value: '15 min', label: 'Setup rápido' },
    ],
    mock: {
      inboxTitle: 'Mensagens',
      statusNew: 'Nova',
      messages: [
        { name: 'Sara M.', text: 'Reagendar consulta da Luna?' },
        { name: 'João T.', text: 'Obrigado pelos resultados!' },
        { name: 'Maria K.', text: 'Lembrete · Vacina Max amanhã' },
        { name: 'David L.', text: 'Instruções pós-consulta enviadas' },
      ],
      syncTitle: 'Sincronizado com PIMS',
      syncDesc: 'Marcações e clientes atualizados',
    },
  },
  features: {
    label: 'Funcionalidades',
    title: 'Comunicação melhor — sobre o que já tem',
    subtitle:
      'Não é um PIMS novo. Uma camada de comunicação ligada ao seu software, para toda a equipa.',
    integrationsAria: 'Integrações',
    integrationsLabel: 'Compatível com',
    integrationsMore: '+ outros',
    items: [
      {
        title: 'Integração PIMS',
        description:
          'Liga ao software da clínica. Sincroniza clientes, animais e marcações — sem duplicar dados.',
      },
      {
        title: 'Mensagens bidirecionais',
        description:
          'SMS, e-mail ou chat numa caixa partilhada — cada conversa no registo certo.',
      },
      {
        title: 'Lembretes automáticos',
        description:
          'Confirmações, vacinas e seguimentos enviados da agenda que já usa.',
      },
      {
        title: 'Documentos e updates',
        description:
          'Análises, cuidados e faturas em segurança — o cliente é notificado na hora.',
      },
      {
        title: 'Caixa da equipa',
        description:
          'Receção, técnicos e vets no mesmo histórico. Atribua e transfira conversas.',
      },
      {
        title: 'Seguro',
        description:
          'Encriptação, permissões por função e auditoria — comunicação em conformidade.',
      },
    ],
  },
  howItWorks: {
    label: 'Como funciona',
    title: 'Ativo numa tarde — mesmo software',
    subtitle: 'Sem mudar de PIMS. O VetPlus assenta no que já utiliza.',
    steps: [
      {
        title: 'Ligar o PIMS',
        description:
          'Associe em minutos. Sincronizamos clientes, animais e marcações — sem migração.',
      },
      {
        title: 'Configurar a equipa',
        description:
          'Convide receção e clínicos. Modelos, lembretes e notificações à medida.',
      },
      {
        title: 'Contactar clientes',
        description:
          'Mensagens no dia 1. Lembretes automáticos, respostas numa caixa, menos chamadas.',
      },
    ],
  },
  testimonials: {
    label: 'Testemunhos',
    title: 'Melhor comunicação — sem mudar de sistema',
    items: [
      {
        quote:
          'Queríamos menos chamadas, não novo PIMS. O VetPlus integrou-se — a receção respira.',
        name: 'Dra. Sara Chen',
        role: 'Diretora, Paws & Claws',
        initials: 'SC',
      },
      {
        quote:
          'Setup numa tarde. Lembretes automáticos e respostas visíveis para toda a equipa.',
        name: 'Marcus Rivera',
        role: 'Gestor, Hospital Veterinário do Vale',
        initials: 'MR',
      },
      {
        quote:
          'Resultados por link seguro. O cliente notifica-se e responde por mensagem.',
        name: 'Dra. Emily Okonkwo',
        role: 'Vet. responsável, Greenfield',
        initials: 'EO',
      },
    ],
  },
  pricing: {
    label: 'Preços',
    title: 'Planos simples para comunicar melhor',
    subtitle: '14 dias grátis e setup PIMS incluído. −20% em faturação anual.',
    currency: '€',
    perMonth: '/mês',
    custom: 'À medida',
    badgePopular: 'Popular',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        price: '79',
        description: 'Clínicas pequenas a modernizar comunicação.',
        features: [
          'Integração PIMS',
          'SMS e e-mail',
          'Lembretes de marcação',
          'Até 3 utilizadores',
          'Apoio por e-mail',
        ],
        cta: 'Teste gratuito',
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '149',
        description: 'Clínicas com volume e automatização.',
        features: [
          'Tudo do Starter',
          'Equipa ilimitada',
          'Modelos e campanhas',
          'Documentos e análises',
          'Histórico de conversas',
          'Apoio prioritário',
        ],
        cta: 'Teste gratuito',
        highlighted: true,
        badge: 'Popular',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'custom',
        description: 'Grupos multi-sede e integrações à medida.',
        features: [
          'Painel multi-sede',
          'Conectores PIMS à medida',
          'Onboarding dedicado',
          'SLA e gestor',
          'Permissões avançadas',
        ],
        cta: 'Contactar',
      },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Dúvidas? Respondemos.',
    subtitleBefore: 'Mais questões?',
    subtitleLink: 'Fale connosco',
    subtitleAfter: '— resposta em horas.',
    items: [
      {
        q: 'Substituo o software da clínica?',
        a: 'Não. Integra o PIMS atual — a equipa mantém as ferramentas habituais; o VetPlus acrescenta comunicação.',
      },
      {
        q: 'Que PIMS suportam?',
        a: 'ezyVet, Cornerstone, AVImark, Provet, HVMS e outros. Não está na lista? Contacte-nos.',
      },
      {
        q: 'Quanto demora o setup?',
        a: 'Muitas clínicas ligam e enviam a 1.ª mensagem no mesmo dia — em geral menos de 1 hora.',
      },
      {
        q: 'Como recebem as mensagens?',
        a: 'SMS, e-mail ou app. As respostas chegam à caixa VetPlus, ligadas ao cliente e animal no PIMS.',
      },
      {
        q: 'É seguro?',
        a: 'Sim. Encriptação, permissões por função e registos de auditoria para conformidade.',
      },
    ],
  },
  cta: {
    title: 'Pronto para falar com clientes?',
    subtitle: 'Clínicas que comunicam com tutores — sem mudar de software.',
    emailLabel: 'E-mail profissional',
    emailPlaceholder: 'si@suaclinica.pt',
    submit: 'Começar grátis',
    note: '14 dias grátis · Setup PIMS · Compatível com o seu sistema',
    alert: 'Obrigado! Contactamos {{email}} em breve.',
  },
  footer: {
    tagline:
      'Comunicação com clientes integrada no software da clínica — sem substituir o seu fluxo.',
    navAria: 'Rodapé',
    copyright: 'Todos os direitos reservados.',
    groups: [
      {
        title: 'Produto',
        items: ['Funcionalidades', 'Integrações', 'Preços', 'Novidades'],
      },
      {
        title: 'Empresa',
        items: ['Sobre', 'Carreiras', 'Blogue', 'Contacto'],
      },
      {
        title: 'Legal',
        items: ['Privacidade', 'Termos', 'Segurança'],
      },
    ],
  },
}
