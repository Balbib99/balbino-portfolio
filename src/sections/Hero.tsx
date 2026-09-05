import { LinkButton } from "../components/LinkButton";
import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

const coreStack = ["Angular", "Node.js", "Python", "React", "PostgreSQL", "ISO 27001"];

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden bg-surface-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgb(var(--signal-rgb)/0.09),transparent_38%)]"
      />
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="hero-copy">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal bg-signal/10 px-3 py-1 font-mono text-xs text-signal-strong">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-signal motion-safe:animate-pulse motion-reduce:animate-none"
            />
            {t.hero.status}
          </p>
          <h1 className="max-w-2xl text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[2.75rem]">
            {t.personalData.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-secondary">{t.personalData.heroSubtitle}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{t.personalData.heroDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href="#proyectos" variant="panelPrimary">
              {t.buttons.viewProjects}
            </LinkButton>
            <LinkButton href={t.personalData.cvUrl} download variant="panel">
              {t.buttons.downloadCv}
            </LinkButton>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink-muted underline decoration-line-strong decoration-1 underline-offset-4 transition hover:text-signal-strong hover:decoration-signal"
            >
              {t.buttons.github}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink-muted underline decoration-line-strong decoration-1 underline-offset-4 transition hover:text-signal-strong hover:decoration-signal"
            >
              {t.buttons.linkedin}
            </a>
          </div>
        </div>

        <div className="hero-photo mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="overflow-hidden rounded-md border border-line bg-surface-1">
            <div className="aspect-[4/5] overflow-hidden bg-surface-2">
              <img
                src={personalData.profileImage}
                alt={t.hero.profileAlt}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
          <div className="mt-3 rounded-md border border-line bg-surface-1">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs text-ink-muted">rol</span>
              <span className="text-sm text-ink">{t.hero.role}</span>
            </div>
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs text-ink-muted">ubicación</span>
              <span className="text-sm text-ink">{t.hero.location}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="font-mono text-xs text-ink-muted">estado</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap text-sm text-signal-strong">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {t.nav.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
