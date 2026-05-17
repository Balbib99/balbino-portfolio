import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { projects } from "../data/portfolioData";

export const Projects = () => (
  <section id="proyectos" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Proyectos destacados"
        title="Aplicaciones reales con arquitectura completa"
        description="Una selección inicial de proyectos preparada para que empresas y reclutadores puedan evaluar producto, código, despliegue y decisiones técnicas."
      />
      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  </section>
);
