import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Value = () => {
  const { t } = useLanguage();

  return (
  <section id="aportacion" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-[#0b1220] sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow={t.value.eyebrow}
        title={t.value.title}
        description={t.value.description}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {t.value.items.map((item, index) => (
          <article
            key={item.title}
            className="group rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_24px_80px_-54px_rgba(45,212,191,0.28)] dark:hover:border-teal-400/35 dark:hover:bg-white/[0.075]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-400/10 dark:text-teal-200 dark:group-hover:bg-teal-400 dark:group-hover:text-slate-950">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
