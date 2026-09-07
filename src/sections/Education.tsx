import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import type { EducationItem } from "../data/portfolioData";

const ItemList = ({ label, items }: { label: string; items: EducationItem[] }) => (
  <div>
    <p className="mb-4 font-mono text-xs lowercase text-ink-faint">// {label}</p>
    {items.map((item) => (
      <article
        key={`${item.title}-${item.institution ?? "cert"}`}
        className="border-t border-line py-3.5 last:border-b"
      >
        <div className="flex justify-between gap-3">
          <h3 className="font-sans text-base font-semibold tracking-normal">{item.title}</h3>
          {item.period ? (
            <span className="shrink-0 whitespace-nowrap font-mono text-xs text-ink-faint">{item.period}</span>
          ) : null}
        </div>
        {item.institution ? <p className="mt-1 text-sm text-ink-soft">{item.institution}</p> : null}
      </article>
    ))}
  </div>
);

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="formacion" className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="03"
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          description={t.education.description}
        />
        <div className="grid gap-12 md:grid-cols-2">
          <ItemList label={t.education.mainTitle} items={t.education.education} />
          <ItemList label={t.education.certificationsTitle} items={t.education.certifications} />
        </div>
      </div>
    </section>
  );
};
