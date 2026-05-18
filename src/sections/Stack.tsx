import { SkillCategoryCard } from "../components/SkillCategoryCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Stack = () => {
  const { t } = useLanguage();

  return (
  <section id="stack" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow={t.stack.eyebrow}
        title={t.stack.title}
        description={t.stack.description}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.stack.categories.map((category, index) => (
          <SkillCategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
  );
};
