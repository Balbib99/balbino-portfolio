import { SkillCategoryCard } from "../components/SkillCategoryCard";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Stack = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="05" eyebrow={t.stack.eyebrow} title={t.stack.title} description={t.stack.description} />
        <div className="overflow-hidden rounded-md border border-line bg-surface-1">
          {t.stack.categories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              isLast={index === t.stack.categories.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
