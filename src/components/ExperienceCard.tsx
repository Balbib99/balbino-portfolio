import type { Experience } from "../data/portfolioData";

type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-950 dark:text-white">{experience.role}</h3>
        <p className="mt-1 font-semibold text-teal-700 dark:text-teal-300">{experience.company}</p>
      </div>
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {experience.period}
      </span>
    </div>
    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
      {experience.description.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);
