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
  technicalDecisions: string[];
  learning: string;
};

export type Project = {
  name: string;
  subtitle: string;
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
  name: string;
  skills: string[];
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
      technicalDecisions: [
        "Separación entre frontend y backend.",
        "Modo demo accesible sin registro.",
        "Persistencia de favoritos.",
        "Uso de APIs externas.",
        "Estrategia de fallback para mantener una experiencia estable.",
        "Diseño responsive orientado a producto.",
      ],
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
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Angular", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "APIs REST"],
  },
  {
    name: "Bases de datos",
    skills: ["PostgreSQL", "InfluxDB", "Bases de datos temporales"],
  },
  {
    name: "DevOps y despliegue",
    skills: ["Git", "GitHub", "Vercel", "Render", "Neon"],
  },
  {
    name: "IoT y hardware",
    skills: ["Raspberry Pi", "Sensores", "MQTT", "Integración hardware-software", "Adquisición de datos"],
  },
  {
    name: "Ciberseguridad",
    skills: ["ISO 27001", "ISO 27002", "Análisis de riesgos", "Auditoría interna", "Linux", "Metasploit", "SQLMap", "TryHackMe"],
  },
  {
    name: "IA aplicada",
    skills: ["Automatizaciones", "Agentes", "Integración de IA en soluciones reales", "Productividad con IA"],
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
