import type { SkillCategory } from "../data/portfolioData";
import { SkillBadge } from "./SkillBadge";

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
};

export const SkillCategoryCard = ({ category, index }: SkillCategoryCardProps) => (
  <article className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-800">
    <div
      aria-hidden="true"
      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-slate-800 dark:text-teal-300 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950"
    >
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="pr-12">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {category.items.map((skill) => (
        <SkillBadge key={skill} label={skill} />
      ))}
    </div>
  </article>
);
