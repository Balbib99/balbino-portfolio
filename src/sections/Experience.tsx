import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
  <section id="experiencia" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-[#0b1220] sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="[&>div]:mb-0">
          <SectionTitle
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </div>
        <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:mr-8 lg:h-80 lg:w-80">
          <div className="absolute inset-3 rounded-full border border-cyan-200 bg-cyan-50/75 shadow-[0_22px_70px_-38px_rgba(14,165,233,0.55)] dark:border-cyan-400/20 dark:bg-cyan-400/[0.08]" />
          <div className="absolute -left-1 top-8 h-16 w-16 rounded-full border border-teal-300/50 dark:border-teal-300/25" />
          <div className="absolute bottom-9 right-1 h-20 w-20 rounded-full border border-sky-300/45 dark:border-sky-300/25" />
          <img
            src="/experience-tech-avatar.jpg"
            alt={t.experience.avatarAlt}
            className="relative h-full w-full rounded-full object-cover object-[50%_15%] p-2"
          />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {t.experience.items.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
        ))}
      </div>
    </div>
  </section>
  );
};
