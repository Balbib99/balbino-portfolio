import { DownloadIcon, GithubIcon, LinkedinIcon, PillBadge } from "../components/PillBadge";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { useLanguage } from "../context/LanguageContext";
import { links } from "../data/portfolioData";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 -top-40 h-[620px] w-[620px] rounded-full border border-line"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <p className="mb-5 font-mono text-xs text-ink-faint">
          <span aria-hidden="true">// </span>
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-[14ch] text-[2.4rem] leading-[1.02] sm:text-6xl lg:text-[5rem]">{t.hero.headline}</h1>
        <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-ink">{t.personalData.heroTitle}</p>
        <p className="mt-4 max-w-[58ch] leading-relaxed text-ink-soft">{t.personalData.heroSubtitle}</p>
        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ink-soft">{t.personalData.heroDescription}</p>

        <div className="mb-12 mt-8 flex flex-wrap gap-3">
          <PillBadge href={links.github} label={t.buttons.github} icon={<GithubIcon />} external />
          <PillBadge href={links.linkedin} label={t.buttons.linkedin} icon={<LinkedinIcon />} external />
          <PillBadge href={t.personalData.cvUrl} label={t.buttons.downloadCv} icon={<DownloadIcon />} download />
        </div>

        <ProjectCarousel projects={t.projects.items} />
      </div>
    </section>
  );
};
