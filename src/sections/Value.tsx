import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const Value = () => {
  const { t } = useLanguage();

  return (
    <section id="aportacion" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="02" eyebrow={t.value.eyebrow} title={t.value.title} description={t.value.description} />
        <div className="overflow-hidden rounded-md border border-line bg-surface-1 md:grid md:grid-cols-2">
          {t.value.items.map((item, index) => (
            <div
              key={item.title}
              className={`px-5 py-4 md:px-6 md:py-5 ${
                index !== t.value.items.length - 1 ? "border-b border-line" : ""
              } ${index % 2 === 0 && index !== t.value.items.length - 1 ? "md:border-r md:border-line" : ""}`}
            >
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
