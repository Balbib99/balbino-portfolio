import { LinkButton } from "../components/LinkButton";
import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Hero = () => {
  const { t } = useLanguage();

  return (
  <section id="inicio" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f8fafc_0%,#eef6f8_48%,#f8fafc_100%)] dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
      <div className="hero-copy">
        <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-white/75 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur dark:border-teal-800 dark:bg-slate-900/70 dark:text-teal-300">
          {t.hero.tag}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          {t.personalData.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug text-slate-800 dark:text-slate-100">
          {t.personalData.heroSubtitle}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t.personalData.heroDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#proyectos" variant="primary">
            {t.buttons.viewProjects}
          </LinkButton>
          <LinkButton href={t.personalData.cvUrl} download>
            {t.buttons.downloadCv}
          </LinkButton>
          <LinkButton href={links.github} target="_blank" rel="noopener noreferrer" variant="ghost">
            {t.buttons.github}
          </LinkButton>
          <LinkButton href={links.linkedin} target="_blank" rel="noopener noreferrer" variant="ghost">
            {t.buttons.linkedin}
          </LinkButton>
        </div>
      </div>

      <div className="hero-photo relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="absolute -inset-4 rounded-[2rem] bg-teal-500/10 blur-2xl dark:bg-teal-300/10" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/65">
          <div className="aspect-[4/5] max-h-[560px] overflow-hidden rounded-[1.25rem] bg-slate-200 dark:bg-slate-800">
            <img
              src={personalData.profileImage}
              alt={t.hero.profileAlt}
              className="h-full w-full object-cover"
              loading="eager"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-950/80">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">{t.hero.cardTitle}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.hero.cardText}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
