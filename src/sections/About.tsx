import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { personalData } from "../data/portfolioData";

const Heading = ({ children }: { children: string }) => (
  <h3 className="mb-3.5 font-mono text-xs font-semibold lowercase text-ink-faint">
    <span aria-hidden="true">// </span>
    {children}
  </h3>
);

const ValueList = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="flex flex-col gap-4">
    {items.map((item) => (
      <div key={item.title} className="border-t border-line pt-3.5">
        <strong className="mb-1 block text-[0.95rem] font-semibold">{item.title}</strong>
        <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
      </div>
    ))}
  </div>
);

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />

        <p className="mb-11 max-w-[50ch] text-xl leading-relaxed text-ink-soft">{t.about.lead}</p>

        <div className="grid items-stretch gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-4">
            {t.about.stack.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-[22px] px-7 py-6 ${
                  index === 0 ? "bg-invert-bg text-invert-ink" : "border border-line-strong"
                } ${index === 1 ? "lg:w-[74%]" : ""} ${index === 3 ? "lg:ml-auto lg:w-[86%]" : ""}`}
              >
                <h3 className="mb-2.5 font-sans text-lg font-bold tracking-normal">{group.title}</h3>
                <p
                  className={`font-mono text-[0.84rem] leading-relaxed ${index === 0 ? "opacity-75" : "text-ink-soft"}`}
                >
                  {group.items.join(" / ")}
                </p>
              </div>
            ))}
          </div>

          <div className="min-h-[260px] overflow-hidden rounded-[22px] border border-line-strong">
            <img
              src={personalData.profileImage}
              alt={t.hero.profileAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top grayscale contrast-[1.05]"
            />
          </div>
        </div>

        <details className="group mt-9 border-t border-line pt-[18px]">
          <summary className="inline-flex items-center gap-2.5 font-mono text-sm text-ink-soft transition hover:text-ink">
            <span
              aria-hidden="true"
              className="grid h-[22px] w-[22px] place-items-center rounded-full border border-line-strong transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
            {t.about.more}
          </summary>

          <div className="flex flex-col gap-9 pt-7">
            <div>
              <Heading>{t.about.profileTitle}</Heading>
              <p className="max-w-[74ch] leading-relaxed text-ink-soft">{t.about.description}</p>
            </div>

            <div>
              <Heading>{t.about.storyTitle}</Heading>
              {t.about.text.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-4 max-w-[74ch] leading-relaxed text-ink-soft last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-9 md:grid-cols-2 md:gap-x-12">
              <div>
                <Heading>{t.about.valueTitle}</Heading>
                <ValueList items={t.value.items} />
              </div>
              <div>
                <Heading>{t.about.focusTitle}</Heading>
                <ValueList items={t.about.cards} />
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};
