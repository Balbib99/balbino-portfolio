import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
  <section id="experiencia" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {t.experience.items.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
        ))}
      </div>
    </div>
  </section>
  );
};
