import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import type { EducationItem } from "../data/portfolioData";

const ItemList = ({ items }: { items: EducationItem[] }) => (
  <div className="overflow-hidden rounded-md border border-line bg-surface-1">
    {items.map((item, index) => (
      <article
        key={`${item.title}-${item.institution ?? "cert"}`}
        className={index !== items.length - 1 ? "border-b border-line px-5 py-4" : "px-5 py-4"}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
            {item.institution ? <p className="mt-0.5 text-xs text-ink-muted">{item.institution}</p> : null}
          </div>
          {item.period ? (
            <span className="shrink-0 rounded-sm border border-line-strong px-2 py-0.5 font-mono text-xs text-ink-secondary">
              {item.period}
            </span>
          ) : null}
        </div>
        {item.description ? (
          <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">{item.description}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="formacion" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="06"
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          description={t.education.description}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs lowercase text-ink-muted">{t.education.mainTitle}</p>
            <ItemList items={t.education.education} />
          </div>
          <div>
            <p className="mb-3 font-mono text-xs lowercase text-ink-muted">{t.education.certificationsTitle}</p>
            <ItemList items={t.education.certifications} />
          </div>
        </div>
      </div>
    </section>
  );
};
