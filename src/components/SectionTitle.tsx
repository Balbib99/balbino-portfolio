type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Section index shown before the eyebrow, e.g. "01". */
  index?: string;
};

export const SectionTitle = ({ eyebrow, title, description, index }: SectionTitleProps) => (
  <div className="mb-10 max-w-3xl">
    <div className="mb-3 flex items-center gap-3 font-mono text-xs text-ink-muted">
      {index ? <span>{index}</span> : null}
      {eyebrow ? <span className="lowercase">{eyebrow}</span> : null}
    </div>
    <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
    {description ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-secondary">{description}</p> : null}
  </div>
);
