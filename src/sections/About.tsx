import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="01" eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-line bg-surface-1 p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-ink-secondary">
              {t.about.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="h-fit overflow-hidden rounded-md border border-line bg-surface-1">
            {t.about.cards.map((card, index) => (
              <div
                key={card.title}
                className={index !== t.about.cards.length - 1 ? "border-b border-line px-5 py-4" : "px-5 py-4"}
              >
                <p className="font-mono text-xs lowercase text-ink-muted">{card.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
