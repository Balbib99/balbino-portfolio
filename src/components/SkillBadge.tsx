type SkillBadgeProps = {
  label: string;
  accent?: "orange" | "red" | "emerald";
};

const accentClassNames = {
  orange:
    "hover:border-teal-300 hover:text-teal-700 dark:hover:border-teal-400/50 dark:hover:bg-teal-400/10 dark:hover:text-teal-200",
  red:
    "hover:border-red-300 hover:text-red-700 dark:hover:border-red-400/50 dark:hover:bg-red-400/10 dark:hover:text-red-200",
  emerald:
    "hover:border-emerald-300 hover:text-emerald-700 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-200",
};

export const SkillBadge = ({ label, accent = "orange" }: SkillBadgeProps) => (
  <span className={`inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-200 ${accentClassNames[accent]}`}>
    {label}
  </span>
);
