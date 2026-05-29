import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
  <section id="sobre-mi" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="[&>div]:mb-0">
          <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} />
        </div>
        <div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72 lg:mr-8 lg:h-80 lg:w-80">
          <div className="absolute inset-3 rounded-full border border-teal-200 bg-teal-50/70 shadow-[0_22px_70px_-38px_rgba(20,184,166,0.55)] dark:border-teal-400/20 dark:bg-teal-400/[0.08]" />
          <div className="absolute -right-1 top-8 h-16 w-16 rounded-full border border-cyan-300/50 dark:border-cyan-300/25" />
          <div className="absolute bottom-9 left-1 h-20 w-20 rounded-full border border-orange-300/45 dark:border-orange-300/25" />
          <img
            src="/about-cyber-avatar.jpg"
            alt={t.about.avatarAlt}
            className="relative h-full w-full rounded-full object-cover object-[50%_18%] p-2"
          />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_24px_80px_-54px_rgba(45,212,191,0.25)]">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{t.about.text}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {t.about.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-teal-400/35 dark:hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};
