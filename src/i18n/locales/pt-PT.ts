import type { Messages } from '../types'

/** European Portuguese (pt-PT) — concise, sales-focused */
export const ptPT: Messages = {
  meta: {
    title: 'Vet+ — Cuidados veterinários, finalmente organizados',
    description:
      'O Vet+ ajuda tutores e clínicas a acabar com a comunicação caótica. Uma app para chat, marcações, sintomas, medicação e documentos — feita para veterinária.',
  },
  header: {
    logoAria: 'Início Vet+',
    navAria: 'Principal',
    nav: {
      features: 'Funcionalidades',
      howItWorks: 'Como funciona',
      benefits: 'Benefícios',
      forYou: 'Para quem',
      faq: 'FAQ',
    },
    learnMore: 'Ver funcionalidades',
    cta: 'Acesso antecipado',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    langEn: 'EN',
    langPt: 'PT',
    switchLang: 'Idioma',
  },
  hero: {
    badge: 'Para tutores e clínicas veterinárias',
    title: 'Os cuidados do seu animal merecem',
    titleEm: 'um só lugar',
    lead: 'Chega de chamadas, mensagens e papelada dispersa.',
    supporting:
      'O Vet+ reúne chat com o veterinário, marcações, sintomas, medicação e documentos — tudo no mesmo sítio, para tutores e clínicas.',
    ctaPrimary: 'Acesso antecipado',
    ctaSecondary: 'Ver funcionalidades',
    mock: {
      appTitle: 'Vet+',
      rows: [
        { label: 'Chat com o veterinário', detail: 'Fale com a equipa, sem ficar em espera' },
        { label: 'Marcar consulta', detail: 'Marcações sem idas e voltas' },
        { label: 'Lembrete de medicação', detail: 'Tratamento na hora certa em casa' },
        { label: 'Documentos', detail: 'Resultados e notas, quando precisar' },
      ],
      floatTitle: 'Registo de sintomas',
      floatDesc: 'Registe o que muda — mantenha o veterinário informado',
    },
  },
  features: {
    label: 'Funcionalidades',
    title: 'O que hoje está disperso — amanhã unificado',
    subtitle:
      'O Vet+ é a plataforma que reúne comunicação, agenda, saúde e registos numa experiência — com chat directo entre tutores e veterinários.',
    items: [
      {
        title: 'Contacto e chat com o veterinário',
        description:
          'Mensagens à clínica sem telefonemas. Conversas claras, ligadas aos cuidados do animal.',
      },
      {
        title: 'Marcação de consultas',
        description:
          'Marque e gira visitas em poucos toques. Menos administração para a clínica, menos stress para o tutor.',
      },
      {
        title: 'Registo de sintomas',
        description:
          'Registe sintomas à medida que aparecem. Dê ao veterinário o quadro completo — não só o que se lembra na consulta.',
      },
      {
        title: 'Alertas de medicação',
        description:
          'Lembretes atempados para o tratamento cumprir. Tranquilidade para o tutor, melhores resultados para o animal.',
      },
      {
        title: 'Partilha de documentos',
        description:
          'Resultados e instruções entregues em segurança — sem procurar em e-mails ou chamadas perdidas.',
      },
      {
        title: 'Uma plataforma coordenada',
        description:
          'Tudo ligado, pensado para veterinária — não adaptado de outro sector.',
      },
    ],
  },
  howItWorks: {
    label: 'Como funciona',
    title: 'Do caos à clareza em três passos',
    subtitle:
      'O Vet+ transforma idas e voltas desorganizadas num percurso de cuidados em que ambos confiam.',
    steps: [
      {
        title: 'Abra o Vet+',
        description:
          'Tutores e clínicas na mesma plataforma — feita para ligar os dois lados desde o início.',
      },
      {
        title: 'Centralize os cuidados',
        description:
          'Mensagens, marcações, sintomas, medicação e documentos finalmente no mesmo sítio.',
      },
      {
        title: 'Cuide com confiança',
        description:
          'Menos mal-entendidos, seguimento mais rápido e uma relação mais forte com a clínica.',
      },
    ],
  },
  benefits: {
    label: 'Benefícios',
    title: 'Porque tutores e clínicas escolhem o Vet+',
    subtitle:
      'Menos fricção. Mais confiança. Cuidados como deviam ser — organizados, humanos e sempre por perto.',
    practicalTitle: 'O que ganha',
    emotionalTitle: 'O que sente',
    practical: [
      {
        title: 'Comunicação que funciona',
        description: 'Fale com o veterinário quando importa — sem rodeios.',
      },
      {
        title: 'Tudo num só lugar',
        description: 'Marcações, sintomas, medicação e documentos — finalmente reunidos.',
      },
      {
        title: 'Atualizações a tempo',
        description: 'A informação certa, na altura certa — sem correr atrás da clínica.',
      },
    ],
    emotional: [
      {
        title: 'Menos stress',
        description: 'Deixe de duvidar se se esqueceu de algo importante.',
      },
      {
        title: 'Confiança real',
        description: 'Saiba que está a cuidar bem do animal — com apoio que aparece.',
      },
      {
        title: 'Mais perto da clínica',
        description: 'Ligação à equipa que cuida do seu animal, para além da consulta.',
      },
    ],
  },
  audiences: {
    label: 'Para quem',
    title: 'Para si — cuide em casa ou na clínica',
    subtitle:
      'O Vet+ serve os dois lados da relação com ferramentas à medida da veterinária.',
    cards: [
      {
        id: 'owners',
        name: 'Tutores',
        description:
          'Quer conveniência, clareza e um veterinário fácil de contactar. O Vet+ põe os cuidados do animal organizados — sem complicar.',
        features: [
          'Chat com o veterinário',
          'Marcações simples',
          'Registo de sintomas',
          'Lembretes de medicação',
          'Documentos sempre acessíveis',
        ],
        cta: 'Acesso antecipado',
      },
      {
        id: 'clinics',
        name: 'Clínicas veterinárias',
        description:
          'Quer clientes mais satisfeitos e uma equipa que não afoga em chamadas. O Vet+ comunica com clareza — menos repetição, mais cuidado.',
        features: [
          'Contacto com clientes fluido',
          'Marcações mais simples',
          'Contexto partilhado por animal',
          'Entrega segura de documentos',
          'Tutores mais envolvidos',
        ],
        cta: 'Acesso antecipado',
      },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Dúvidas? Respondemos.',
    subtitleBefore: 'Ainda curioso?',
    subtitleLink: 'Fale connosco',
    subtitleAfter: '— gostamos de ouvir.',
    items: [
      {
        q: 'O que é o Vet+?',
        a: 'O Vet+ é uma app coordenada para tutores e clínicas veterinárias. Reúne comunicação, marcações, sintomas, alertas de medicação e documentos numa plataforma feita para veterinária — disponível em computador e telemóvel.',
      },
      {
        q: 'Para quem é o Vet+?',
        a: 'Para tutores cansados de seguimento confuso e para clínicas que querem comunicação coordenada sem o telefone a tocar sem parar.',
      },
      {
        q: 'Em que se diferencia?',
        a: 'A maioria das ferramentas resolve uma peça. O Vet+ unifica o percurso de cuidados — com chat entre tutores e veterinários, num produto só para veterinária.',
      },
      {
        q: 'Como posso ter acesso?',
        a: 'O Vet+ está quase a chegar. Deixe o e-mail abaixo e avisamos em primeiro lugar.',
      },
    ],
  },
  cta: {
    title: 'Pronto para cuidados que finalmente encaixam?',
    subtitle:
      'Junte-se à lista de acesso antecipado — tutor ou clínica, mantemos-no informado.',
    emailLabel: 'Endereço de e-mail',
    emailPlaceholder: 'si@exemplo.pt',
    submit: 'Pedir acesso antecipado',
    note: 'Sem spam — só novidades sobre o Vet+.',
    alert: 'Está na lista! Em breve enviamos novidades para {{email}}.',
  },
  footer: {
    tagline:
      'Vet+ — uma plataforma para comunicação veterinária, marcações, saúde e documentos.',
    navAria: 'Rodapé',
    copyright: 'Todos os direitos reservados.',
    groups: [
      { title: 'Produto', items: ['Funcionalidades', 'Benefícios', 'Para quem', 'FAQ'] },
      { title: 'Empresa', items: ['Sobre', 'Contacto'] },
      { title: 'Legal', items: ['Privacidade', 'Termos'] },
    ],
  },
}
