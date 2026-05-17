import { SectionTitle } from "../components/SectionTitle";
import { aboutCards, personalData } from "../data/portfolioData";

export const About = () => (
  <section id="sobre-mi" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Sobre mí" title="Tecnología aplicada con mentalidad de producto" description={personalData.professionalProfile} />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{personalData.about}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-teal-800 dark:hover:bg-slate-900"
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
