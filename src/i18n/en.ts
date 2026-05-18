import type { es } from "./es";
import { links } from "../data/portfolioData";

export const en: typeof es = {
  seo: {
    title: "Balbino Martínez | Software Developer, Cybersecurity and Applied AI",
    description:
      "Professional portfolio of Balbino Martínez Rodríguez, a software developer specialized in web applications, IoT, cybersecurity, data and applied artificial intelligence.",
  },
  personalData: {
    name: "Balbino Martínez Rodríguez",
    displayName: "Balbino Martínez",
    role: "Software developer",
    email: "balbib99@gmail.com",
    location: "Valladolid, Spain",
    profileImage: "/balbino-profile.jpg",
    cvUrl: "/cv-balbino-martinez-en.pdf",
    heroTitle: "Hi, I’m Balbino Martínez.",
    heroSubtitle: "Software developer specialized in web development, IoT, cybersecurity and applied AI.",
    heroDescription:
      "I build end-to-end solutions combining frontend, backend, data, hardware–software integration and security best practices.",
    professionalProfile:
      "I’m a software developer with a hybrid profile in web development, cybersecurity, IoT and applied AI. I have experience in real R&D environments, web interface development, hardware–software integration, data acquisition and visualization, distributed systems and security best practices.",
    about:
      "I’m a Higher Technician in Web Application Development and currently studying a Master’s Degree in Cybersecurity. My profile combines web development, hardware–software integration, data analysis, IoT and applied AI. I have worked in real R&D environments developing web interfaces, sensing modules, distributed systems and solutions focused on data acquisition and visualization.",
  },
  navItems: [
    { label: "About", href: "#sobre-mi" },
    { label: "Value", href: "#aportacion" },
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#formacion" },
    { label: "Contact", href: "#contacto" },
  ],
  buttons: {
    viewProjects: "View projects",
    downloadCv: "Download CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    viewNbaInsight: "View NBA Insight",
    viewDemo: "View demo",
    viewCode: "View code",
    technicalDetails: "Technical details",
  },
  hero: {
    tag: "Web development · IoT · Cybersecurity · Applied AI",
    profileAlt: "Profile photo of Balbino Martínez Rodríguez",
    cardTitle: "Hybrid technical profile",
    cardText: "Software, data, security and hardware–software integration.",
  },
  nav: {
    aria: "Main navigation",
    openMenu: "Open navigation menu",
  },
  about: {
    eyebrow: "About me",
    title: "Hybrid profile in development, data and cybersecurity",
    description:
      "I’m a software developer with a hybrid profile in web development, cybersecurity, IoT and applied AI. I have experience in real R&D environments, web interface development, hardware–software integration, data acquisition and visualization, distributed systems and security best practices.",
    text:
      "I’m a Higher Technician in Web Application Development and currently studying a Master’s Degree in Cybersecurity. My profile combines web development, hardware–software integration, data analysis, IoT and applied AI. I have worked in real R&D environments developing web interfaces, sensing modules, distributed systems and solutions focused on data acquisition and visualization.",
    cards: [
      {
        title: "Real R&D",
        text: "Experience in research projects applied to sensing, data and hardware–software integration.",
      },
      {
        title: "IoT systems",
        text: "Development of connected solutions with sensors, backend services, databases and information visualization.",
      },
      {
        title: "Applied AI",
        text: "Use of artificial intelligence and automation to improve processes, data analysis and productivity.",
      },
    ],
  },
  value: {
    eyebrow: "Professional value",
    title: "What I can bring to a technical team",
    description:
      "My profile combines web development, data, IoT and cybersecurity, allowing me to contribute to different stages of a solution: from the user interface to integration with systems, APIs, databases and security best practices.",
    items: [
      { title: "Full web development", text: "Frontend, backend, REST APIs, authentication, deployment and application maintenance." },
      { title: "Data and integration", text: "Work with databases, time-series data, visualization, data acquisition and system integration." },
      { title: "IoT and hardware-software", text: "Experience connecting sensors, Raspberry Pi, backend services and visualization platforms." },
      { title: "Security by design", text: "Knowledge of ISO 27001, risk analysis, Linux, internal auditing and data protection best practices." },
      { title: "Automation and AI", text: "Use of applied AI and automation to create more efficient and scalable solutions." },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience in development, data and integration",
    description:
      "I have worked in real environments developing web solutions, sensing systems, hardware–software integration, IoT services and tools focused on data visualization and management.",
    responsibilities: "Responsibilities",
    technologies: "Technologies and areas",
    value: "Value delivered",
    items: [
      {
        company: "Universidad de Valladolid",
        role: "Research Technician Level 1",
        period: "2024 - 2026",
        location: "Valladolid, Spain",
        type: "R&D · Full time",
        summary:
          "Participation in research and development projects focused on sensing solutions, web interfaces, hardware–software integration, data acquisition and connected systems.",
        responsibilities: [
          "Development of web interfaces for sensing modules.",
          "Python programming for data acquisition, processing and visualization.",
          "Integration of sensors, hardware and software in IoT environments.",
          "Work with Linux systems and Raspberry Pi for service deployment and device connectivity.",
          "Setup and configuration of IoT services, servers and databases.",
          "Application of artificial intelligence and security best practices in data-oriented systems.",
        ],
        technologies: ["Python", "Linux", "Raspberry Pi", "IoT", "Sensors", "Databases", "Applied AI", "Hardware–software integration", "Data acquisition"],
        valuePoints: [
          "Experience in real R&D environments.",
          "Ability to connect software, hardware and data.",
          "Work on applied solutions with practical impact.",
          "Hybrid technical profile across development, systems, IoT and security.",
        ],
      },
      {
        company: "ZG Service",
        role: "Full Stack Developer",
        period: "March 2023 - July 2023",
        location: "Valladolid, Spain",
        type: "Internship + subsequent temporary position",
        summary:
          "I started as a full stack developer during an internship and later continued collaborating full time, participating in web application development, data management and maintenance of digital solutions.",
        responsibilities: [
          "Development of web applications using Angular and Node.js.",
          "Implementation of business logic and API communication.",
          "Management and querying of time-series data with InfluxDB.",
          "Development and maintenance of corporate websites with WordPress.",
          "Work with version control and collaboration on development tasks.",
          "Participation in the development cycle from an internship stage to a later temporary position.",
        ],
        technologies: ["Angular", "Node.js", "JavaScript", "InfluxDB", "WordPress", "APIs", "Git", "Web development", "Full Stack"],
        valuePoints: [
          "First professional experience in web development.",
          "Continuity after the internship period, taking on new responsibilities.",
          "Practical use of frontend and backend technologies.",
          "Adaptation to real workflows and technical collaboration.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Featured projects",
    title: "Real applications with complete architecture",
    description:
      "Personal and professional projects that show how I work, my technical decisions and my ability to build complete solutions.",
    items: [
      {
        name: "NBA Insight",
        subtitle: "Full Stack NBA Analytics Platform",
        badges: ["Main project", "Deployed in production", "NBA Analytics", "Demo available"],
        dashboardItems: [
          { label: "Games", value: "Stats" },
          { label: "Players", value: "Profiles" },
          { label: "Standings", value: "Live view" },
          { label: "Favorites", value: "Persist" },
        ],
        description:
          "Full stack NBA analytics web application built with React, TypeScript, Node.js and PostgreSQL. The project includes a frontend deployed on Vercel, a backend connected to external services, JWT authentication, demo mode, persistent favorites and an architecture designed to separate the public experience from backend logic.",
        technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "Vercel", "Render", "Neon", "Git"],
        highlights: [
          "Real application deployed in production.",
          "Demo mode available for recruiters without registration.",
          "JWT authentication system.",
          "Persistent favorites.",
          "Separated frontend/backend architecture.",
          "Responsive design.",
          "External APIs and fallback strategy.",
        ],
        caseStudy: {
          problem:
            "I wanted to build a web platform to browse NBA information in a clear, modern and accessible way, demonstrating a real full stack architecture deployed in production.",
          solution:
            "I developed an application with a React and TypeScript frontend, Node.js and Express backend, JWT authentication, favorite persistence and deployment using Vercel, Render and Neon.",
          architecture: [
            "Frontend in React, TypeScript and Vite.",
            "Backend with Node.js and Express.",
            "PostgreSQL database hosted on Neon.",
            "Frontend deployed on Vercel.",
            "Backend deployed on Render.",
            "Demo mode with local persistence so any recruiter can test the application without signing up.",
            "Integration with external APIs for NBA data.",
          ],
          role:
            "I designed and developed the full application, from frontend structure and user experience to backend integration, authentication, favorite persistence and deployment.",
          technicalDecisions: [
            "Separation between frontend and backend.",
            "Demo mode available without registration.",
            "Favorite persistence.",
            "Use of external APIs.",
            "Fallback strategy to keep a stable experience.",
            "Product-oriented responsive design.",
            "Separation between public experience and backend logic.",
          ],
          result:
            "A functional and deployed application that recruiters can test directly, showing frontend, backend, data integration, authentication, deployment and product design skills.",
          learning:
            "This project helped me strengthen my knowledge of full stack architecture, real deployment, authentication, external API consumption, data persistence and user experience.",
        },
        links: { demo: links.nbaInsight, code: "https://github.com/Balbib99/nba-insight" },
      },
    ],
    card: {
      sportsDashboard: "Sports dashboard",
      sportsAnalytics: "Sports Analytics · Full Stack",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      step: "Step",
      role: "Role in the project",
      result: "Result",
      learning: "Learning",
      technicalDecisions: "Technical decisions",
      pipelineItems: ["Frontend", "Backend", "Database", "Deploy"],
    },
  },
  stack: {
    eyebrow: "Technology stack",
    title: "Technologies and areas of expertise",
    description:
      "I have worked with frontend, backend, data, IoT systems, deployment and cybersecurity technologies, applying them in academic, professional and personal projects.",
    categories: [
      { title: "Frontend", description: "I develop modern, adaptable and maintainable interfaces using current web ecosystem technologies.", items: ["React", "TypeScript", "JavaScript", "Angular", "Vite", "HTML", "CSS", "Tailwind CSS"] },
      { title: "Backend", description: "Building APIs, business logic, authentication and backend services for web applications.", items: ["Node.js", "Express", "Python", "REST APIs", "JWT"] },
      { title: "Data and databases", description: "Work with relational and time-series databases to store, query and visualize information.", items: ["PostgreSQL", "Neon", "InfluxDB", "Time-series databases", "Data visualization"] },
      { title: "DevOps and deployment", description: "Use of version control, deployment and configuration tools to bring applications to production.", items: ["Git", "GitHub", "Vercel", "Render", "Docker", "Environment variables", "Nginx"] },
      { title: "IoT and Linux systems", description: "Experience with Linux, Raspberry Pi, sensors and data acquisition in hardware–software integration environments.", items: ["Linux", "Raspberry Pi", "Sensors", "MQTT", "Data acquisition", "Hardware–software integration", "Linux services", "Systemd"] },
      { title: "Cybersecurity", description: "Knowledge of information security, risk analysis, internal auditing and technical assessment tools.", items: ["ISO 27001", "ISO 27002", "Risk analysis", "Internal audit", "Linux", "Metasploit", "SQLMap", "TryHackMe"] },
      { title: "Applied AI and automation", description: "Use of artificial intelligence and automation to improve processes, productivity and software solutions.", items: ["Applied AI", "Automation", "AI agents", "Workflows", "AI productivity"] },
    ],
  },
  education: {
    eyebrow: "Education and certifications",
    title: "Continuous learning in software, cybersecurity and AI",
    description:
      "My education combines software development, information security, applied artificial intelligence and technical systems fundamentals, allowing me to approach solutions from a complete perspective.",
    mainTitle: "Main education",
    certificationsTitle: "Certifications",
    education: [
      { title: "Master’s Degree in Cybersecurity", institution: "Instituto Europeo de Posgrado", period: "2025 - 2026", description: "Specialized training in system protection, risk analysis, security auditing, forensic investigation and information security management.", tags: ["Cybersecurity", "Risk analysis", "ISO 27001", "Audit", "Digital forensics"] },
      { title: "Online Master’s Degree in AI and Innovation", institution: "Founderz & Microsoft", period: "2026", description: "Program focused on the practical application of artificial intelligence in digital products, process automation, AI agents and productivity improvement.", tags: ["Applied AI", "Automation", "AI agents", "Innovation", "Productivity"] },
      { title: "Higher Technician in Web Application Development", institution: "IES Julián Marías", period: "2021 - 2023", description: "Technical training in web application development, databases, frontend, backend, programming and deployment of web solutions.", tags: ["Web development", "Frontend", "Backend", "Databases", "JavaScript"] },
      { title: "Technician in Electrical and Automatic Installations", institution: "IES Julián Marías", period: "2019 - 2021", description: "Technical training in electrical installations, automation and electrical systems fundamentals, providing a useful base for hardware–software integration and IoT.", tags: ["Automation", "Electrical installations", "Hardware fundamentals", "IoT"] },
    ],
    certifications: [
      { title: "Internal Auditor ISO 27001:2022", institution: "IEP / CUA / Bureau Veritas Business School", period: "2026", description: "Certification focused on internal auditing of Information Security Management Systems under ISO 27001:2022.", tags: ["ISO 27001", "ISMS", "Internal audit", "Information security"] },
      { title: "Cyber Security 101", institution: "TryHackMe", period: "2026", description: "Introductory certification focused on cybersecurity fundamentals, Linux, networking, basic analysis and security tools.", tags: ["TryHackMe", "Linux", "Cybersecurity fundamentals", "Offensive security"] },
      { title: "React Master: ReactJS, Hooks, MERN, NodeJS, JWT+", institution: "Udemy", period: "2023", description: "Practical training in frontend development with React, hooks, MERN architecture, Node.js and JWT authentication.", tags: ["React", "Hooks", "MERN", "Node.js", "JWT"] },
      { title: "Featured TryHackMe badges", institution: "TryHackMe", period: "2025 - 2026", description: "Practical recognitions obtained in cybersecurity labs focused on Linux, enumeration, controlled vulnerability exploitation and tools such as Metasploit and SQLMap.", tags: ["Linux", "Metasploit", "SQLMap", "EternalBlue", "Controlled exploitation", "Practical labs", "Aprendiz de espada", "Being competent in Linux", "Contains the knowledge to use Metasploit", "Hacking into Windows via EternalBlue"] },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about software, data and connected systems.",
    description:
      "I’m open to professional opportunities where I can contribute to web development, IoT integration, cybersecurity, automation and applied AI.",
    availabilityTitle: "Availability",
    availabilityText: "You can also review my main project deployed in production:",
    formTitle: "Contact form",
    quickLinks: "Quick links",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "Professional opportunity, collaboration, interview...",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      submit: "Prepare email",
      help: "Your email app will open with the message prepared before sending it.",
      error: "Subject and message are required.",
      bodyName: "Name",
      bodyEmail: "Contact email",
      bodyMessage: "Message",
    },
  },
  footer: { text: "Professional portfolio." },
  theme: {
    light: "Light mode",
    dark: "Dark mode",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  language: { label: "Change language" },
};
