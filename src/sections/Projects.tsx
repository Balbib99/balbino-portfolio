import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="04"
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="overflow-hidden rounded-md border border-line bg-surface-1">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isLast={index === t.projects.items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
