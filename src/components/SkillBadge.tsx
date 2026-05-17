type SkillBadgeProps = {
  label: string;
};

export const SkillBadge = ({ label }: SkillBadgeProps) => (
  <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-300">
    {label}
  </span>
);
