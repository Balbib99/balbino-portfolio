import { SectionTitle } from "../components/SectionTitle";
import { SkillBadge } from "../components/SkillBadge";
import { skillCategories } from "../data/portfolioData";

export const Stack = () => (
  <section id="stack" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Stack tecnológico" title="Herramientas para construir de extremo a extremo" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <article key={category.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{category.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
