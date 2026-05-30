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
      <div className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="[&>div]:mb-0">
          <SectionTitle
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            description={t.education.description}
          />
        </div>
        <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:mr-8 lg:h-80 lg:w-80">
          <div className="absolute inset-3 rounded-full border border-amber-200 bg-amber-50/70 shadow-[0_22px_70px_-38px_rgba(245,158,11,0.42)] dark:border-amber-300/20 dark:bg-amber-300/[0.08]" />
          <div className="absolute -right-1 top-8 h-16 w-16 rounded-full border border-teal-300/50 dark:border-teal-300/25" />
          <div className="absolute bottom-9 left-1 h-20 w-20 rounded-full border border-cyan-300/45 dark:border-cyan-300/25" />
          <img
            src="/education-graduate-avatar.jpg"
            alt={t.education.avatarAlt}
            className="relative h-full w-full rounded-full object-cover object-[50%_15%] p-2"
          />
        </div>
      </div>
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
