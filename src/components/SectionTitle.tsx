type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <div className="mb-10 max-w-3xl">
    {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-200">{eyebrow}</p> : null}
    <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300/95">{description}</p> : null}
  </div>
);
