import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="01" eyebrow={t.experience.eyebrow} title={t.experience.title} />
        <div className="border-t border-line-strong">
          {t.experience.items.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
