import type { SkillCategory } from "../data/portfolioData";

type SkillCategoryCardProps = {
  category: SkillCategory;
  isLast: boolean;
};

export const SkillCategoryCard = ({ category, isLast }: SkillCategoryCardProps) => (
  <div className={isLast ? "px-5 py-5 sm:px-6" : "border-b border-line px-5 py-5 sm:px-6"}>
    <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-6">
      <h3 className="text-base font-semibold text-ink">{category.title}</h3>
      <p className="mt-1 text-sm text-ink-secondary sm:mt-0 sm:max-w-md sm:text-right">{category.description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {category.items.map((skill) => (
        <span
          key={skill}
          className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
