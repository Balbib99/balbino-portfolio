import { SkillCategoryCard } from "../components/SkillCategoryCard";
import { SectionTitle } from "../components/SectionTitle";
import { skillCategories } from "../data/portfolioData";

export const Stack = () => (
  <section id="stack" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Stack tecnológico"
        title="Tecnologías y áreas de especialización"
        description="He trabajado con tecnologías de frontend, backend, datos, sistemas IoT, despliegue y ciberseguridad, aplicándolas en proyectos académicos, profesionales y personales."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);
