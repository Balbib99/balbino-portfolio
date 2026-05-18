import type { Experience } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SkillBadge } from "./SkillBadge";

type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { t } = useLanguage();

  return (
  <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{experience.company}</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{experience.role}</h3>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{experience.location}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{experience.type}</span>
        </div>
      </div>
      <span className="inline-flex shrink-0 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 dark:bg-teal-950/40 dark:text-teal-300">
        {experience.period}
      </span>
    </div>

    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{experience.summary}</p>

    <div className="mt-6">
      <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200">{t.experience.responsibilities}</h4>
      <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {experience.responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6">
      <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200">{t.experience.technologies}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <SkillBadge key={technology} label={technology} />
        ))}
      </div>
    </div>

    <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40">
      <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">{t.experience.value}</h4>
      <ul className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {experience.valuePoints.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
  );
};
