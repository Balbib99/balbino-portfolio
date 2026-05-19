import {
  aboutCards,
  certifications,
  education,
  experiences,
  personalData,
  projects,
  skillCategories,
  valueItems,
} from "../data/portfolioData";

export const es = {
  seo: {
    title: "Balbino Martínez | Desarrollador de Software, Ciberseguridad e IA aplicada",
    description:
      "Porfolio profesional de Balbino Martínez Rodríguez, desarrollador de software especializado en aplicaciones web, IoT, ciberseguridad, datos e inteligencia artificial aplicada.",
  },
  personalData: {
    ...personalData,
    cvUrl: "/cv-balbino-martinez-es.pdf",
  },
  navItems: [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Aportación", href: "#aportacion" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Formación", href: "#formacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  buttons: {
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    viewNbaInsight: "Ver NBA Insight",
    viewDemo: "Ver demo",
    viewCode: "GitHub",
    technicalDetails: "Caso de estudio",
  },
  hero: {
    tag: "Desarrollo web · IoT · Ciberseguridad · IA aplicada",
    profileAlt: "Foto de perfil de Balbino Martínez Rodríguez",
    cardTitle: "Perfil híbrido técnico",
    cardText: "Software, datos, seguridad e integración hardware-software.",
  },
  nav: {
    aria: "Navegación principal",
    openMenu: "Abrir menú de navegación",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Perfil híbrido en desarrollo, datos y ciberseguridad",
    description: personalData.professionalProfile,
    text: personalData.about,
    cards: aboutCards,
  },
  value: {
    eyebrow: "Valor profesional",
    title: "Qué puedo aportar a un equipo técnico",
    description:
      "Mi perfil combina desarrollo web, datos, IoT y ciberseguridad, lo que me permite participar en distintas fases de una solución: desde la interfaz de usuario hasta la integración con sistemas, APIs, bases de datos y buenas prácticas de seguridad.",
    items: valueItems,
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Experiencia en desarrollo, datos e integración",
    description:
      "He trabajado en entornos reales desarrollando soluciones web, sistemas de sensorización, integración hardware-software, servicios IoT y herramientas orientadas a la visualización y gestión de datos.",
    responsibilities: "Responsabilidades",
    technologies: "Tecnologías y áreas",
    value: "Valor aportado",
    items: experiences,
  },
  projects: {
    eyebrow: "Proyectos destacados",
    title: "Aplicaciones reales con arquitectura completa",
    description:
      "Proyectos personales y profesionales que muestran mi forma de trabajar, mis decisiones técnicas y mi capacidad para construir soluciones completas.",
    items: projects,
    card: {
      sportsDashboard: "Sports dashboard",
      sportsAnalytics: "Sports Analytics · Full-stack",
      overview: "Resumen",
      problem: "Problema",
      solution: "Solución",
      mainFeatures: "Funcionalidades principales",
      techStack: "Stack técnico",
      architecture: "Arquitectura",
      step: "Paso",
      role: "Rol en el proyecto",
      result: "Resultado",
      learning: "Aprendizaje",
      technicalDecisions: "Decisiones técnicas",
      links: "Enlaces",
      pipelineItems: ["Frontend", "Backend", "Base de datos", "Deploy"],
    },
  },
  stack: {
    eyebrow: "Stack tecnológico",
    title: "Tecnologías y áreas de especialización",
    description:
      "He trabajado con tecnologías de frontend, backend, datos, sistemas IoT, despliegue y ciberseguridad, aplicándolas en proyectos académicos, profesionales y personales.",
    categories: skillCategories,
  },
  education: {
    eyebrow: "Formación y certificaciones",
    title: "Aprendizaje continuo en software, ciberseguridad e IA",
    description:
      "Mi formación combina desarrollo de software, seguridad de la información, inteligencia artificial aplicada y fundamentos técnicos de sistemas, lo que me permite abordar soluciones desde una perspectiva completa.",
    mainTitle: "Formación principal",
    certificationsTitle: "Certificaciones",
    education,
    certifications,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de software, datos y sistemas conectados.",
    description:
      "Estoy abierto a oportunidades profesionales donde pueda aportar en desarrollo web, integración IoT, ciberseguridad, automatización e IA aplicada.",
    availabilityTitle: "Disponibilidad",
    availabilityText: "También puedes revisar mi proyecto principal desplegado en producción:",
    formTitle: "Formulario de contacto",
    quickLinks: "Enlaces rápidos",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu.email@ejemplo.com",
      subject: "Asunto",
      subjectPlaceholder: "Propuesta profesional, colaboración, entrevista...",
      message: "Mensaje",
      messagePlaceholder: "Escribe aquí tu mensaje...",
      submit: "Preparar email",
      help: "Se abrirá tu aplicación de correo con el mensaje preparado antes de enviarlo.",
      error: "El asunto y el mensaje son obligatorios.",
      bodyName: "Nombre",
      bodyEmail: "Email de contacto",
      bodyMessage: "Mensaje",
    },
  },
  footer: {
    text: "Portfolio profesional.",
  },
  theme: {
    light: "Modo claro",
    dark: "Modo oscuro",
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
  language: {
    label: "Cambiar idioma",
  },
};
