type SectionTitleProps = {
  /** Order number for the numbered sections; omitted where the content isn't a sequence. */
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionTitle = ({ index, eyebrow, title, description }: SectionTitleProps) => (
  <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
    <div>
      <span className="font-mono text-xs lowercase text-ink-faint">
        {index ? `${index} / ${eyebrow}` : `// ${eyebrow}`}
      </span>
      <h2 className="mt-2.5 text-2xl text-ink sm:text-3xl">{title}</h2>
    </div>
    {description ? <p className="max-w-[34ch] text-sm leading-relaxed text-ink-soft">{description}</p> : null}
  </div>
);
