import { SectionTitle } from "../components/SectionTitle";
import { SkillBadge } from "../components/SkillBadge";
import { useLanguage } from "../context/LanguageContext";
import type { EducationItem } from "../data/portfolioData";

const ItemList = ({ items }: { items: EducationItem[] }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <article
        key={`${item.title}-${item.institution ?? "cert"}`}
        className="rounded-lg border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_22px_70px_-52px_rgba(45,212,191,0.22)] dark:hover:border-teal-400/35 dark:hover:bg-white/[0.075]"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
            {item.institution ? <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.institution}</p> : null}
          </div>
          {item.period ? (
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/[0.07] dark:text-slate-300">
              {item.period}
            </span>
          ) : null}
        </div>
        {item.description ? <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <SkillBadge key={tag} label={tag} />
          ))}
        </div>
      </article>
    ))}
  </div>
);

export const Education = () => {
  const { t } = useLanguage();

  return (
  <section id="formacion" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        description={t.education.description}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-bold text-slate-950 dark:text-white">{t.education.mainTitle}</h3>
          <ItemList items={t.education.education} />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-slate-950 dark:text-white">{t.education.certificationsTitle}</h3>
          <ItemList items={t.education.certifications} />
        </div>
      </div>
    </div>
  </section>
  );
};
