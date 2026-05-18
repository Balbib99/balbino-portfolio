import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { experiences } from "../data/portfolioData";

export const Experience = () => (
  <section id="experiencia" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Experiencia"
        title="Experiencia en desarrollo, datos e integración"
        description="He trabajado en entornos reales desarrollando soluciones web, sistemas de sensorización, integración hardware-software, servicios IoT y herramientas orientadas a la visualización y gestión de datos."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
        ))}
      </div>
    </div>
  </section>
);
