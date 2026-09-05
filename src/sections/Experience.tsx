import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="03"
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />
        <div className="overflow-hidden rounded-md border border-line bg-surface-1">
          {t.experience.items.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              isLast={index === t.experience.items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
