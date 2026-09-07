export type LinkItem = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  valuePoints: string[];
};

export type CaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  mainFeatures: string[];
  techStack: string[];
  pipelineItems: string[];
  architecture: string[];
  role: string;
  technicalDecisions: string[];
  result: string;
  learning: string;
};

export type Project = {
  name: string;
  subtitle: string;
  accentColor: "orange" | "red" | "emerald";
  categoryLabel: string;
  dashboardTitle: string;
  badges: string[];
  dashboardItems: {
    label: string;
    value: string;
  }[];
  visual?: {
    src: string;
    alt: string;
  };
  description: string;
  technologies: string[];
  highlights: string[];
  caseStudy: CaseStudy;
  links: {
    demo?: string;
    code: string;
  };
};

export type SkillCategory = {
  title: string;
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
  cvUrl: "/cv-balbino-martinez-es.pdf",
  heroTitle: "Construyo aplicaciones full-stack y sé cómo intentarían romperlas.",
  heroSubtitle:
    "Full-stack con base en I+D: interfaces web, integración hardware-software y sistemas de adquisición de datos en tiempo real, con la seguridad incorporada desde el diseño.",
  heroDescription:
    "Angular, Node.js y Python en producción; sensores y Raspberry Pi en el otro extremo. Máster en Ciberseguridad y Auditor Interno ISO 27001 — no como añadido, sino porque ya protegía estos datos antes de formalizarlo.",
  professionalProfile:
    "Soy desarrollador de software con un perfil híbrido en desarrollo web, ciberseguridad, IoT e IA aplicada. Tengo experiencia en entornos reales de I+D, desarrollo de interfaces web, integración hardware-software, adquisición y visualización de datos, sistemas distribuidos y buenas prácticas de seguridad.",
  about: [
    "Empecé programando para clientes reales en ZG Service —Angular, Node.js, APIs REST— antes incluso de terminar el ciclo de Desarrollo de Aplicaciones Web. Entre 2024 y enero de 2026 trabajé como Técnico Investigador en la Universidad de Valladolid, donde el problema cambiaba de forma: en vez de una API que devuelve JSON, eran sensores que generaban datos en tiempo real que había que capturar, procesar y visualizar sin perder ni un paquete. Ahí es donde el desarrollo web se cruzó con el hardware —Raspberry Pi, Linux, integración de sensores— y donde entendí que proteger esos datos no es un extra, es parte del diseño desde el primer día.",
    "Por eso hice el Máster en Ciberseguridad y me certifiqué como Auditor Interno ISO 27001: no para cambiar de campo, sino para dejar de improvisar la parte de seguridad de lo que ya construía. Lo complementé con laboratorios prácticos de TryHackMe —explotación controlada, Metasploit, SQLMap— porque quería entender el ataque, no solo la defensa.",
    "Fuera del trabajo, construyo aplicaciones full-stack completas para demostrar que puedo llevar un producto de cero a producción: NBA Insight (analítica deportiva con React, Node y PostgreSQL), AttackFlow Lab (plataforma educativa de ciberseguridad) y Court Vision Lab (editor táctico de baloncesto). Las tres están desplegadas y funcionando — no en un repositorio a medias.",
  ],
};

export const links = {
  github: "https://github.com/Balbib99",
  linkedin: "https://www.linkedin.com/in/balbino-martinez-rodriguez-2912bb332",
  email: "mailto:balbib99@gmail.com",
  nbaInsight: "https://nba-insight-eight.vercel.app/",
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
    title: "Interfaces modernas",
    text: "Construyo interfaces responsive, mantenibles y pensadas para que el usuario entienda rápido el producto.",
  },
  {
    title: "Integración completa",
    text: "Conecto frontend con backend, APIs, autenticación y bases de datos para crear aplicaciones funcionales.",
  },
  {
    title: "Proyectos reales",
    text: "He trabajado en soluciones aplicadas más allá de landing pages: datos, servicios, despliegue y producto.",
  },
  {
    title: "Datos, IoT y seguridad",
    text: "Me interesan los productos basados en datos, sistemas conectados, ciberseguridad e integración hardware-software.",
  },
  {
    title: "Criterio técnico y UX",
    text: "Cuido tanto la arquitectura y mantenibilidad como la claridad visual, el responsive y la experiencia de uso.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Universidad de Valladolid",
    role: "Técnico Investigador Nivel 1",
    period: "2024 - Enero 2026",
    location: "Valladolid, España",
    type: "I+D · Tiempo completo",
    summary:
      "Participación en proyectos de investigación y desarrollo centrados en soluciones de sensorización, interfaces web, integración hardware-software, adquisición de datos y sistemas conectados.",
    responsibilities: [
      "Desarrollo de interfaces web para módulos de sensorización.",
      "Programación en Python para adquisición, tratamiento y visualización de datos.",
      "Integración de sensores, hardware y software en entornos IoT.",
      "Trabajo con sistemas Linux y Raspberry Pi para despliegue de servicios y conexión de dispositivos.",
      "Montaje y configuración de servicios IoT, servidores y bases de datos.",
      "Aplicación de inteligencia artificial y buenas prácticas de seguridad en sistemas orientados a datos.",
    ],
    technologies: [
      "Python",
      "Linux",
      "Raspberry Pi",
      "IoT",
      "Sensores",
      "Bases de datos",
      "IA aplicada",
      "Integración hardware-software",
      "Adquisición de datos",
    ],
    valuePoints: [
      "Experiencia en entornos reales de I+D.",
      "Capacidad para conectar software, hardware y datos.",
      "Trabajo en soluciones aplicadas con impacto práctico.",
      "Perfil técnico híbrido entre desarrollo, sistemas, IoT y seguridad.",
    ],
  },
  {
    company: "ZG Service",
    role: "Desarrollador Full Stack",
    period: "Marzo 2023 - Julio 2023",
    location: "Valladolid, España",
    type: "Prácticas + posterior incorporación temporal",
    summary:
      "Comencé como desarrollador full stack en periodo de prácticas y posteriormente continué colaborando en jornada completa, participando en el desarrollo de aplicaciones web, gestión de datos y mantenimiento de soluciones digitales.",
    responsibilities: [
      "Desarrollo de aplicaciones web utilizando Angular y Node.js.",
      "Implementación de lógica de negocio y comunicación con APIs.",
      "Gestión y consulta de datos temporales con InfluxDB.",
      "Desarrollo y mantenimiento de sitios corporativos con WordPress.",
      "Trabajo con control de versiones y colaboración en tareas de desarrollo.",
      "Participación en el ciclo de desarrollo desde una primera etapa de prácticas hasta una posterior incorporación temporal.",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "JavaScript",
      "InfluxDB",
      "WordPress",
      "APIs",
      "Git",
      "Desarrollo web",
      "Full Stack",
    ],
    valuePoints: [
      "Primera experiencia profesional en desarrollo web.",
      "Continuidad tras el periodo de prácticas, asumiendo nuevas responsabilidades.",
      "Aplicación práctica de tecnologías frontend y backend.",
      "Adaptación a flujos de trabajo reales y colaboración técnica.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "NBA Insight",
    subtitle: "Full-stack basketball analytics platform",
    accentColor: "orange",
    categoryLabel: "Sports Analytics · Full-stack",
    dashboardTitle: "Sports dashboard",
    badges: ["Proyecto principal", "Desplegado en producción", "NBA Analytics", "Demo disponible"],
    dashboardItems: [
      { label: "Games", value: "Stats" },
      { label: "Players", value: "Profiles" },
      { label: "Standings", value: "Live view" },
      { label: "Favorites", value: "Saved" },
    ],
    visual: {
      src: "/project-nba-insight-screenshot.jpg",
      alt: "Captura de pantalla de la aplicación NBA Insight en producción",
    },
    description:
      "Plataforma full-stack de analítica NBA desarrollada con React, TypeScript, Node.js y PostgreSQL. El proyecto permite explorar equipos, jugadores, standings, playoffs, comparativas y favoritos mediante una interfaz limpia, responsive y preparada como producto real desplegado.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "API-Basketball",
      "JWT",
      "Vercel",
      "Render",
      "Neon",
      "Git",
    ],
    highlights: [
      "Aplicación real desplegada en producción.",
      "Modo demo accesible para reclutadores sin necesidad de registro.",
      "Exploración de teams, players, analytics, compare, standings y playoffs.",
      "Sistema de autenticación con JWT.",
      "Persistencia de favoritos.",
      "Arquitectura frontend/backend separada.",
      "Diseño responsive.",
      "Uso de APIs externas con fallback/cache/mock data cuando es necesario.",
    ],
    caseStudy: {
      overview:
        "NBA Insight es una plataforma full-stack de analítica de baloncesto diseñada para explorar equipos, jugadores, standings, playoffs y favoritos de usuario mediante una interfaz limpia y responsive.",
      problem:
        "Las aplicaciones de datos deportivos suelen depender de APIs externas, disponibilidad irregular y estructuras de datos complejas. El objetivo era construir un producto presentable en portfolio que se sintiera realista y mantuviera una demo pública estable y accesible.",
      solution:
        "La aplicación combina un frontend en React y TypeScript con backend en Node.js/Express, persistencia en PostgreSQL y una estrategia híbrida de datos usando información cacheada, mockeada o externa según el entorno.",
      mainFeatures: [
        "Teams, players, standings y playoffs.",
        "Analytics, compare y favoritos persistentes.",
        "Modo demo para probar la aplicación sin registro.",
        "Autenticación con JWT y separación de experiencia pública/backend.",
        "Fallback/cache/mock data para mantener una experiencia estable.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "PostgreSQL / Neon",
        "Render",
        "Vercel",
        "API-Basketball",
      ],
      pipelineItems: ["Frontend", "Backend", "Base de datos", "Deploy"],
      architecture: [
        "Frontend en React, TypeScript y Vite.",
        "Interfaz construida con Tailwind CSS y diseño responsive.",
        "Backend con Node.js y Express.",
        "Base de datos PostgreSQL alojada en Neon.",
        "Despliegue del frontend en Vercel.",
        "Despliegue del backend en Render.",
        "Modo demo con persistencia local para permitir que cualquier recruiter pruebe la aplicación sin registrarse.",
        "Integración con API-Basketball para datos NBA sin exponer API keys en el frontend.",
      ],
      role: "Diseñé y desarrollé la aplicación completa, desde la estructura frontend y la experiencia de usuario hasta la integración backend, autenticación, persistencia de favoritos y despliegue.",
      technicalDecisions: [
        "Separación entre frontend y backend.",
        "Modo demo accesible sin registro.",
        "Persistencia de favoritos.",
        "Uso de APIs externas.",
        "Estrategia de fallback/cache/mock data para mantener una experiencia estable.",
        "Diseño responsive orientado a producto.",
        "Separación entre experiencia pública y lógica backend.",
      ],
      result:
        "Una aplicación funcional y desplegada que puede ser probada directamente por reclutadores, mostrando capacidades de desarrollo frontend, backend, integración de datos, autenticación, despliegue y diseño de producto.",
      learning:
        "Este proyecto me permitió mejorar mi capacidad para diseñar arquitectura frontend, conectar servicios backend, gestionar variables de entorno, resolver problemas de despliegue, estructurar integraciones con APIs y construir un producto pulido para usuarios reales.",
    },
    links: {
      demo: "https://nba-insight-eight.vercel.app/",
      code: "https://github.com/Balbib99/nba-insight",
    },
  },
  {
    name: "AttackFlow Lab",
    subtitle: "Plataforma educativa de ciberseguridad visual",
    accentColor: "red",
    categoryLabel: "Cybersecurity Education · Frontend",
    dashboardTitle: "Learning dashboard",
    badges: ["Nuevo proyecto", "Ciberseguridad", "Simuladores visuales", "Portfolio"],
    dashboardItems: [
      { label: "Threats", value: "Library" },
      { label: "Simulators", value: "2 flows" },
      { label: "Challenges", value: "Progress" },
      { label: "Tips", value: "Daily security" },
    ],
    visual: {
      src: "/project-attackflow-lab-screenshot.jpg",
      alt: "Captura de pantalla de la aplicación AttackFlow Lab en producción",
    },
    description:
      "Plataforma educativa e interactiva de ciberseguridad en español. Permite aprender amenazas comunes mediante simulaciones visuales, escenarios guiados, consejos prácticos, herramientas recomendadas y retos de conocimiento con progreso local.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "lucide-react",
      "next/image",
      "localStorage",
      "ESLint",
      "Git",
    ],
    highlights: [
      "Simuladores paso a paso de Phishing y SQL Injection.",
      "Enfoque educativo y defensivo, sin instrucciones explotables.",
      "Biblioteca de amenazas, escenarios y rutas de aprendizaje.",
      "Retos interactivos con feedback inmediato.",
      "Progreso de conocimiento guardado en localStorage.",
      "Tema claro/oscuro con persistencia local.",
      "Diseño responsive con componentes organizados por dominio.",
      "Datos mock locales modelados con TypeScript.",
    ],
    caseStudy: {
      overview:
        "AttackFlow Lab es una plataforma frontend educativa que transforma conceptos de ciberseguridad en flujos visuales, retos breves y consejos aplicables al día a día.",
      problem:
        "Muchas explicaciones de ciberseguridad son demasiado técnicas o abstractas para usuarios que necesitan entender riesgos reales y tomar mejores decisiones antes de hacer clic, compartir datos o introducir credenciales.",
      solution:
        "La aplicación organiza el aprendizaje en amenazas, simuladores, escenarios, tips y retos conectados, manteniendo un enfoque defensivo y visual con progreso local para reforzar el aprendizaje.",
      mainFeatures: [
        "Landing orientada a portfolio y reclutadores.",
        "Panel interno de aprendizaje.",
        "Biblioteca de amenazas y rutas guiadas.",
        "Simuladores visuales de Phishing y SQL Injection.",
        "Consejos de seguridad diaria y herramientas recomendadas.",
        "Retos tipo test, verdadero/falso, ordenar pasos y elegir defensa.",
        "Persistencia de progreso y tema en localStorage.",
      ],
      techStack: [
        "Next.js 16",
        "App Router",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Framer Motion",
        "lucide-react",
        "next/image",
      ],
      pipelineItems: ["Contenido", "Simulación", "Retos", "Progreso"],
      architecture: [
        "Aplicación Next.js con App Router y rutas por dominio.",
        "Componentes organizados para dashboard, simuladores, amenazas, retos, tips y layout.",
        "Datos mock locales tipados en TypeScript.",
        "Simuladores visuales basados en pasos, imágenes locales y análisis defensivo.",
        "Estado local para progreso de retos y preferencia de tema.",
        "Uso de next/image para recursos visuales optimizados.",
        "Tema claro/oscuro con experiencia principal dark tech.",
        "Sin backend ni datos reales de usuarios en esta versión.",
      ],
      role: "Diseñé y desarrollé la aplicación completa, desde la arquitectura de rutas y componentes hasta el contenido educativo, los simuladores, los retos, el sistema de tema y la experiencia responsive.",
      technicalDecisions: [
        "Next.js App Router para organizar rutas educativas.",
        "Contenido local tipado para iterar rápido sin backend.",
        "Enfoque defensivo para explicar riesgos sin payloads explotables.",
        "Componentización por dominio.",
        "localStorage para progreso y preferencia de tema.",
        "Imágenes educativas locales para reforzar el aprendizaje visual.",
        "Diseño responsive orientado a producto de portfolio.",
      ],
      result:
        "Un frontend funcional de ciberseguridad educativa que demuestra diseño de producto, arquitectura frontend escalable, modelado de datos, UX visual, theming y contenido aplicado de seguridad.",
      learning:
        "Este proyecto me permitió profundizar en Next.js con App Router, diseño de experiencias educativas, modelado de contenido tipado, simuladores visuales, estado local y comunicación clara de conceptos de ciberseguridad.",
    },
    links: {
      demo: "https://cyber-attack-visualizer-xi.vercel.app/",
      code: "https://github.com/Balbib99/cyber-attack-visualizer",
    },
  },
  {
    name: "Court Vision Lab",
    subtitle: "Tablero táctico interactivo de baloncesto",
    accentColor: "emerald",
    categoryLabel: "Basketball Tactics · Frontend Tool",
    dashboardTitle: "Tactical board",
    badges: ["Proyecto desplegado", "Basketball tooling", "Editor táctico", "Demo disponible"],
    dashboardItems: [
      { label: "Board", value: "2D court" },
      { label: "Plays", value: "Animated" },
      { label: "Playbook", value: "Custom" },
      { label: "Export", value: "PNG/JSON" },
    ],
    visual: {
      src: "/project-court-vision-lab-screenshot.jpg",
      alt: "Captura de pantalla de la aplicación Court Vision Lab en producción",
    },
    description:
      "Herramienta frontend para visualizar, editar y reproducir jugadas de baloncesto en un tablero táctico 2D. Incluye movimientos animados, modo edición, playbook, roster, estadísticas, guías interactivas, persistencia local y exportación de diagramas.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Framer Motion",
      "Lucide React",
      "html-to-image",
      "localStorage",
      "ESLint",
      "Vercel",
    ],
    highlights: [
      "Cancha 2D interactiva con jugadores ofensivos, defensivos y balón.",
      "Reproducción animada de jugadas como Pick and Roll, Horns y Fast Break.",
      "Editor de jugadas personalizadas con pasos, anotaciones y herramientas tácticas.",
      "Playbook con jugadas integradas y jugadas guardadas por el usuario.",
      "Roster y vista de estadísticas para contexto de equipo.",
      "Exportación de diagramas a PNG y jugadas/playbooks a JSON.",
      "Persistencia en localStorage y soporte de undo/redo.",
      "Modo claro/oscuro, modo coach y guías de ayuda integradas.",
    ],
    caseStudy: {
      overview:
        "Court Vision Lab es una aplicación frontend que funciona como pizarra táctica digital para entrenadores, analistas y creadores de contenido de baloncesto.",
      problem:
        "Las jugadas de baloncesto son difíciles de comunicar solo con texto o capturas estáticas. El objetivo era crear una herramienta visual que permitiera entender movimientos, roles, balón y timing de una forma más clara e interactiva.",
      solution:
        "La aplicación separa el modelo de datos de las jugadas de la capa visual, permitiendo reproducir secuencias animadas, editar posiciones, crear jugadas personalizadas, guardar estado local y exportar contenido para compartir.",
      mainFeatures: [
        "Tablero 2D con cancha, jugadores, balón y trayectorias.",
        "Animación paso a paso de jugadas tácticas.",
        "Editor con jugadores ofensivos/defensivos y herramientas de anotación.",
        "Playbook con jugadas built-in y custom plays.",
        "Importación/exportación de jugadas en JSON.",
        "Exportación de diagramas a PNG.",
        "Roster, estadísticas, modo coach y guías interactivas.",
      ],
      techStack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS 4",
        "Framer Motion",
        "html-to-image",
        "Lucide React",
        "Vercel",
      ],
      pipelineItems: ["Board", "Animation", "Editor", "Export"],
      architecture: [
        "Frontend en React, TypeScript y Vite.",
        "Modelo de jugadas tipado con jugadores, pasos, movimientos, balón y anotaciones.",
        "Hooks separados para animación, edición de cancha, undo/redo, persistencia y exportación.",
        "Componentes organizados por dominio: court, layout, plays, views y help.",
        "Persistencia local para tablero, jugadas personalizadas, playbook y tema.",
        "Exportación PNG mediante html-to-image.",
        "Importación y exportación JSON para jugadas y backups de playbook.",
        "Despliegue frontend en Vercel.",
      ],
      role: "Diseñé y desarrollé la aplicación completa, incluyendo el modelo de datos táctico, la cancha interactiva, la animación de jugadas, el editor, el playbook, la persistencia local, las vistas de roster/stats y el despliegue.",
      technicalDecisions: [
        "Separar datos tácticos de renderizado visual.",
        "Usar Framer Motion para movimientos claros y controlados.",
        "Modelar jugadas con TypeScript para facilitar futuras vistas 2D/3D.",
        "Persistir jugadas personalizadas en localStorage.",
        "Añadir exportación PNG/JSON para convertir la app en una herramienta real.",
        "Incluir undo/redo y atajos de teclado para mejorar el flujo de trabajo.",
        "Diseñar una interfaz densa y operativa, más cercana a dashboard que a landing.",
      ],
      result:
        "Una herramienta táctica desplegada y usable que demuestra frontend avanzado, modelado de datos, animación, estado local, arquitectura por hooks y una experiencia de producto orientada a usuarios reales.",
      learning:
        "Este proyecto me ayudó a profundizar en animaciones controladas, diseño de herramientas interactivas, persistencia local, exportación de contenido, separación de lógica visual y estructura escalable para futuras funciones como vistas 3D o colaboración.",
    },
    links: {
      demo: "https://court-vision-lab.vercel.app/",
      code: "https://github.com/Balbib99/court-vision-lab",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    items: ["React", "TypeScript", "Next.js", "Angular", "Vite", "Jest", "Framer Motion"],
  },
  {
    title: "Styles",
    items: ["Tailwind CSS", "SCSS", "Material UI", "Responsive"],
  },
  {
    title: "Back-end & datos",
    items: ["Node", "Express", "Python", "APIs REST", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & IoT",
    items: ["Docker", "Nginx", "Linux", "Vercel", "Render", "Raspberry Pi", "MQTT", "ISO 27001"],
  },
];

export const education: EducationItem[] = [
  {
    title: "Máster en Ciberseguridad",
    institution: "Instituto Europeo de Posgrado",
    period: "2025 - 2026",
    description:
      "Formación especializada en protección de sistemas, análisis de riesgos, auditoría de seguridad, investigación forense y gestión de la seguridad de la información.",
    tags: ["Ciberseguridad", "Análisis de riesgos", "ISO 27001", "Auditoría", "Investigación forense"],
  },
  {
    title: "Máster Online en IA e Innovación",
    institution: "Founderz & Microsoft",
    period: "2026",
    description:
      "Programa orientado a la aplicación práctica de inteligencia artificial en productos digitales, automatización de procesos, agentes IA y mejora de productividad.",
    tags: ["IA aplicada", "Automatizaciones", "Agentes IA", "Innovación", "Productividad"],
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Julián Marías",
    period: "2021 - 2023",
    description:
      "Formación técnica en desarrollo de aplicaciones web, bases de datos, frontend, backend, programación y despliegue de soluciones web.",
    tags: ["Desarrollo web", "Frontend", "Backend", "Bases de datos", "JavaScript"],
  },
  {
    title: "Técnico en Instalaciones Eléctricas y Automáticas",
    institution: "IES Julián Marías",
    period: "2019 - 2021",
    description:
      "Formación técnica en instalaciones eléctricas, automatismos y fundamentos de sistemas eléctricos, aportando una base útil para integración hardware-software e IoT.",
    tags: ["Automatismos", "Instalaciones eléctricas", "Fundamentos hardware", "IoT"],
  },
];

export const certifications: EducationItem[] = [
  {
    title: "Auditor Interno ISO 27001:2022",
    institution: "IEP / CUA / Bureau Veritas Business School",
    period: "2026",
    description:
      "Certificación orientada a la auditoría interna de Sistemas de Gestión de Seguridad de la Información bajo la norma ISO 27001:2022.",
    tags: ["ISO 27001", "SGSI", "Auditoría interna", "Seguridad de la información"],
  },
  {
    title: "Cyber Security 101",
    institution: "TryHackMe",
    period: "2026",
    description:
      "Certificación introductoria enfocada en fundamentos de ciberseguridad, Linux, redes, análisis básico y herramientas de seguridad.",
    tags: ["TryHackMe", "Linux", "Fundamentos de ciberseguridad", "Seguridad ofensiva"],
  },
  {
    title: "Máster en React: ReactJS, Hooks, MERN, NodeJS, JWT+",
    institution: "Udemy",
    period: "2023",
    description:
      "Formación práctica en desarrollo frontend con React, hooks, arquitectura MERN, Node.js y autenticación con JWT.",
    tags: ["React", "Hooks", "MERN", "Node.js", "JWT"],
  },
  {
    title: "TryHackMe badges destacados",
    institution: "TryHackMe",
    period: "2025 - 2026",
    description:
      "Reconocimientos prácticos obtenidos en laboratorios de ciberseguridad enfocados en Linux, enumeración, explotación controlada de vulnerabilidades y uso de herramientas como Metasploit y SQLMap.",
    tags: [
      "Linux",
      "Metasploit",
      "SQLMap",
      "EternalBlue",
      "Explotación controlada",
      "Laboratorios prácticos",
      "Aprendiz de espada",
      "Being competent in Linux",
      "Contains the knowledge to use Metasploit",
      "Hacking into Windows via EternalBlue",
    ],
  },
];
