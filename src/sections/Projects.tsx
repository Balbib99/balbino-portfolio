import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  return (
  <section id="proyectos" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />
      <div className="grid gap-8">
        {t.projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  </section>
  );
};
