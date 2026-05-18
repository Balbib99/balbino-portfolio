export type LinkItem = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type CaseStudy = {
  problem: string;
  solution: string;
  architecture: string[];
  role: string;
  technicalDecisions: string[];
  result: string;
  learning: string;
};

export type Project = {
  name: string;
  subtitle: string;
  badges: string[];
  dashboardItems: {
    label: string;
    value: string;
  }[];
  description: string;
  technologies: string[];
  highlights: string[];
  caseStudy: CaseStudy;
  links: {
    demo: string;
    code: string;
  };
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type AboutCard = {
  title: string;
  text: string;
};

export type ValueItem = {
  title: string;
  text: string;
};

export type EducationItem = {
  title: string;
  institution?: string;
  period?: string;
  description?: string;
  tags: string[];
};

export const personalData = {
  name: "Balbino Martínez Rodríguez",
  displayName: "Balbino Martínez",
  role: "Desarrollador de software",
  email: "balbib99@gmail.com",
  location: "Valladolid, España",
  profileImage: "/balbino-profile.jpg",
  cvUrl: "/cv-balbino-martinez.pdf",
  heroTitle: "Hola, soy Balbino Martínez.",
  heroSubtitle:
    "Desarrollador de software especializado en web, IoT, ciberseguridad e IA aplicada.",
  heroDescription:
    "Construyo soluciones completas combinando frontend, backend, datos, integración hardware-software y buenas prácticas de seguridad.",
  professionalProfile:
    "Soy desarrollador de software con un perfil híbrido en desarrollo web, ciberseguridad, IoT e IA aplicada. Tengo experiencia en entornos reales de I+D, desarrollo de interfaces web, integración hardware-software, adquisición y visualización de datos, sistemas distribuidos y buenas prácticas de seguridad.",
  about:
    "Soy Técnico Superior en Desarrollo de Aplicaciones Web y actualmente curso un Máster en Ciberseguridad. Mi perfil combina desarrollo web, integración hardware-software, análisis de datos, IoT e IA aplicada. He trabajado en entornos reales de I+D desarrollando interfaces web, módulos de sensorización, sistemas distribuidos y soluciones orientadas a la adquisición y visualización de datos.",
};

export const links = {
  github: "https://github.com/Balbib99",
  linkedin: "https://www.linkedin.com/in/balbino-martinez-rodriguez-2912bb332",
  email: "mailto:balbib99@gmail.com",
};

export const navItems: LinkItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Aportación", href: "#aportacion" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export const aboutCards: AboutCard[] = [
  {
    title: "I+D real",
    text: "Experiencia en proyectos de investigación aplicados a sensorización, datos e integración hardware-software.",
  },
  {
    title: "Sistemas IoT",
    text: "Desarrollo de soluciones conectadas con sensores, servicios backend, bases de datos y visualización de información.",
  },
  {
    title: "IA aplicada",
    text: "Uso de inteligencia artificial y automatización para mejorar procesos, análisis de datos y productividad.",
  },
];

export const valueItems: ValueItem[] = [
  {
    title: "Desarrollo web completo",
    text: "Frontend, backend, APIs REST, autenticación, despliegue y mantenimiento de aplicaciones.",
  },
  {
    title: "Datos e integración",
    text: "Trabajo con bases de datos, datos temporales, visualización, adquisición de datos y conexión entre sistemas.",
  },
  {
    title: "IoT y hardware-software",
    text: "Experiencia conectando sensores, Raspberry Pi, servicios backend y plataformas de visualización.",
  },
  {
    title: "Seguridad desde el diseño",
    text: "Conocimientos en ISO 27001, análisis de riesgos, Linux, auditoría interna y buenas prácticas de protección de datos.",
  },
  {
    title: "Automatización e IA",
    text: "Uso de IA aplicada y automatizaciones para crear soluciones más eficientes y escalables.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Universidad de Valladolid",
    role: "Técnico Investigador Nivel 1",
    period: "2024 - 2026",
    description: [
      "Desarrollo de interfaces web para módulos de sensorización.",
      "Programación en Python para adquisición y procesamiento de datos.",
      "Integración hardware-software en entornos IoT.",
      "Montaje de servicios IoT, servidores y bases de datos.",
      "Aplicación de inteligencia artificial y buenas prácticas de seguridad en sistemas de datos.",
    ],
  },
  {
    company: "ZG Service",
    role: "Desarrollador Full Stack",
    period: "Marzo 2023 - Julio 2023",
    description: [
      "Desarrollo de aplicaciones web con Angular y Node.js.",
      "Implementación de APIs y lógica de negocio.",
      "Gestión de datos temporales con InfluxDB.",
      "Desarrollo de sitios corporativos con WordPress.",
      "Trabajo con control de versiones y entornos ágiles.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "NBA Insight",
    subtitle: "Full Stack NBA Analytics Platform",
    badges: ["Proyecto principal", "Desplegado en producción", "NBA Analytics", "Demo disponible"],
    dashboardItems: [
      { label: "Games", value: "Stats" },
      { label: "Players", value: "Profiles" },
      { label: "Standings", value: "Live view" },
      { label: "Favorites", value: "Persist" },
    ],
    description:
      "Aplicación web full stack de análisis NBA desarrollada con React, TypeScript, Node.js y PostgreSQL. El proyecto incluye frontend desplegado en Vercel, backend conectado a servicios externos, autenticación JWT, modo demo, favoritos persistentes y una arquitectura pensada para separar la experiencia pública de la lógica backend.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Vercel",
      "Render",
      "Neon",
      "Git",
    ],
    highlights: [
      "Aplicación real desplegada en producción.",
      "Modo demo accesible para reclutadores sin necesidad de registro.",
      "Sistema de autenticación con JWT.",
      "Persistencia de favoritos.",
      "Arquitectura frontend/backend separada.",
      "Diseño responsive.",
      "Uso de APIs externas y estrategia de fallback.",
    ],
    caseStudy: {
      problem:
        "Quería construir una plataforma web que permitiese consultar información NBA de forma clara, moderna y accesible, demostrando una arquitectura full stack real y desplegada en producción.",
      solution:
        "Desarrollé una aplicación con frontend en React y TypeScript, backend en Node.js y Express, autenticación con JWT, persistencia de favoritos y despliegue usando Vercel, Render y Neon.",
      architecture: [
        "Frontend en React, TypeScript y Vite.",
        "Backend con Node.js y Express.",
        "Base de datos PostgreSQL alojada en Neon.",
        "Despliegue del frontend en Vercel.",
        "Despliegue del backend en Render.",
        "Modo demo con persistencia local para permitir que cualquier recruiter pruebe la aplicación sin registrarse.",
        "Integración con APIs externas para datos NBA.",
      ],
      role:
        "Diseñé y desarrollé la aplicación completa, desde la estructura frontend y la experiencia de usuario hasta la integración backend, autenticación, persistencia de favoritos y despliegue.",
      technicalDecisions: [
        "Separación entre frontend y backend.",
        "Modo demo accesible sin registro.",
        "Persistencia de favoritos.",
        "Uso de APIs externas.",
        "Estrategia de fallback para mantener una experiencia estable.",
        "Diseño responsive orientado a producto.",
        "Separación entre experiencia pública y lógica backend.",
      ],
      result:
        "Una aplicación funcional y desplegada que puede ser probada directamente por reclutadores, mostrando capacidades de desarrollo frontend, backend, integración de datos, autenticación, despliegue y diseño de producto.",
      learning:
        "Este proyecto me permitió reforzar conocimientos de arquitectura full stack, despliegue real, autenticación, consumo de APIs externas, persistencia de datos y experiencia de usuario.",
    },
    links: {
      demo: "https://nba-insight-eight.vercel.app/",
      code: "https://github.com/Balbib99/nba-insight",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Desarrollo interfaces modernas, adaptables y mantenibles usando tecnologías actuales del ecosistema web.",
    items: ["React", "TypeScript", "JavaScript", "Angular", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description:
      "Construcción de APIs, lógica de negocio, autenticación y servicios backend para aplicaciones web.",
    items: ["Node.js", "Express", "Python", "APIs REST", "JWT"],
  },
  {
    title: "Datos y bases de datos",
    description:
      "Trabajo con bases de datos relacionales y temporales para almacenar, consultar y visualizar información.",
    items: ["PostgreSQL", "Neon", "InfluxDB", "Bases de datos temporales", "Visualización de datos"],
  },
  {
    title: "DevOps y despliegue",
    description:
      "Uso de herramientas de control de versiones, despliegue y configuración para llevar aplicaciones a producción.",
    items: ["Git", "GitHub", "Vercel", "Render", "Docker", "Variables de entorno", "Nginx"],
  },
  {
    title: "IoT y sistemas Linux",
    description:
      "Experiencia con Linux, Raspberry Pi, sensores y adquisición de datos en entornos de integración hardware-software.",
    items: ["Linux", "Raspberry Pi", "Sensores", "MQTT", "Adquisición de datos", "Integración hardware-software", "Servicios Linux", "Systemd"],
  },
  {
    title: "Ciberseguridad",
    description:
      "Conocimientos en seguridad de la información, análisis de riesgos, auditoría interna y herramientas de evaluación técnica.",
    items: ["ISO 27001", "ISO 27002", "Análisis de riesgos", "Auditoría interna", "Linux", "Metasploit", "SQLMap", "TryHackMe"],
  },
  {
    title: "IA aplicada y automatización",
    description:
      "Uso de inteligencia artificial y automatizaciones para mejorar procesos, productividad y soluciones software.",
    items: ["IA aplicada", "Automatizaciones", "Agentes IA", "Flujos de trabajo", "Productividad con IA"],
  },
];

export const education: EducationItem[] = [
  {
    title: "Máster en Ciberseguridad",
    institution: "Instituto Europeo de Posgrado",
    tags: ["Análisis de riesgos", "Seguridad de la información", "Auditoría", "Investigación forense"],
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Julián Marías",
    tags: ["Frontend", "Backend", "Bases de datos", "Desarrollo web"],
  },
  {
    title: "Técnico en Instalaciones Eléctricas y Automáticas",
    institution: "IES Julián Marías",
    tags: ["Automatismos", "Instalaciones eléctricas", "Fundamentos hardware"],
  },
];

export const certifications: EducationItem[] = [
  {
    title: "Máster Online en IA e Innovación",
    institution: "Founderz & Microsoft",
    tags: ["IA aplicada", "Automatizaciones", "Agentes IA", "Productividad"],
  },
  {
    title: "Especialización en Automatizaciones",
    institution: "Founderz & Microsoft",
    tags: ["Automatización", "IA", "Flujos de trabajo", "Productividad"],
  },
  {
    title: "Auditor Interno ISO 27001:2022",
    tags: ["ISO 27001", "Auditoría interna", "Seguridad de la información"],
  },
  {
    title: "Cyber Security 101",
    institution: "TryHackMe",
    tags: ["Linux", "Fundamentos de ciberseguridad", "TryHackMe"],
  },
  {
    title: "Máster en React: ReactJS, Hooks, MERN, NodeJS, JWT+",
    tags: ["React", "Hooks", "MERN", "Node.js", "JWT"],
  },
];
