# Portfolio personal — Balbino Martínez Rodríguez

Porfolio profesional desarrollado con React, TypeScript, Vite y Tailwind CSS para presentar mi perfil como desarrollador de software con interés en ciberseguridad, IoT, datos e IA aplicada.

## Demo

Despliegue en Vercel:

`https://balbino-portfolio-sepia.vercel.app/`

Proyecto destacado:

`https://nba-insight-eight.vercel.app/`

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint + Prettier
- Vercel

## Funcionalidades principales

- Diseño responsive.
- Modo claro/oscuro con persistencia en `localStorage`.
- Idioma ES/EN con persistencia en `localStorage`.
- Secciones profesionales: hero, sobre mí, aportación, experiencia, proyectos, stack, formación y contacto.
- Proyectos con caso de estudio desplegable organizado en pestañas (resumen, arquitectura, decisiones, resultado).
- CV descargable (ES/EN).
- Formulario de contacto: envío directo vía [Formspree](https://formspree.io) si está configurado, con fallback automático a `mailto` si no lo está (ver [Formulario de contacto](#formulario-de-contacto)).
- SEO básico: metadatos Open Graph/Twitter, `robots.txt` y `sitemap.xml`.
- Datos principales centralizados y tipados en `src/data/portfolioData.ts`.

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Para generar una build de producción:

```bash
npm run build
npm run preview
```

Para revisar calidad de código:

```bash
npm run lint          # ESLint
npm run format:check  # Comprueba formato con Prettier
npm run format        # Aplica formato con Prettier
```

Un workflow de GitHub Actions (`.github/workflows/ci.yml`) ejecuta lint, formato y build en cada push/PR a `main`.

## Formulario de contacto

Por defecto el formulario de contacto usa `mailto:` (abre el cliente de correo del visitante). Para que envíe los mensajes directamente sin depender del cliente de correo:

1. Crea una cuenta gratuita en [formspree.io](https://formspree.io) y un formulario nuevo.
2. Copia el ID del formulario (la parte final de tu endpoint `https://formspree.io/f/XXXXXXXX`).
3. Define la variable de entorno `VITE_FORMSPREE_FORM_ID=XXXXXXXX` en local (`.env.local`) y/o en el proyecto de Vercel.
4. Redeploy. El formulario detecta la variable automáticamente y cambia de `mailto` a envío directo, sin tocar código.

## Estructura básica

```text
src/
├── components/       # Componentes reutilizables (cards, botones, badges, toggles...)
├── context/          # Contexto de idioma (LanguageContext)
├── data/             # Datos y tipos de contenido (portfolioData.ts)
├── hooks/            # Hooks (useTheme)
├── i18n/             # Diccionarios ES/EN
├── sections/         # Secciones de la página (Hero, About, Projects...)
├── App.tsx
├── main.tsx
└── index.css
```

## Cómo añadir contenido

Todo el contenido (experiencia, proyectos, formación, skills) vive tipado en [`src/data/portfolioData.ts`](src/data/portfolioData.ts) y se traduce en [`src/i18n/es.ts`](src/i18n/es.ts) / [`src/i18n/en.ts`](src/i18n/en.ts). No hace falta tocar componentes para añadir contenido nuevo:

- **Nuevo proyecto**: añade un objeto `Project` (ver el tipo en `portfolioData.ts`) al array `projects` en `es.ts` y su equivalente en `en.ts`. Cada proyecto necesita: datos generales (nombre, subtítulo, badges, tecnologías), un `caseStudy` completo (overview, problem, solution, features, stack, arquitectura, rol, decisiones, resultado, aprendizaje) y sus `links` (demo/código). Si tiene imagen, colócala en `public/` y referencia la ruta en `visual.src`.
- **Nueva experiencia**: añade un objeto `Experience` al array `experience.items` en cada idioma.
- **Nueva formación/certificación**: añade un `EducationItem` a `education.education` o `education.certifications`.
- **Nueva skill**: añade el string al array `items` de la categoría correspondiente en `stack.categories`.

Los componentes (`ProjectCard`, `ExperienceCard`, `SkillCategoryCard`...) renderizan estos datos automáticamente, así que un cambio en los diccionarios se refleja en toda la web sin tocar JSX.

## Autor

Balbino Martínez Rodríguez

- GitHub: https://github.com/Balbib99
- LinkedIn: https://www.linkedin.com/in/balbino-martinez-rodriguez-2912bb332
- Email: balbib99@gmail.com
