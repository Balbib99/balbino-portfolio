import { ContactForm } from "../components/ContactForm";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Contact = () => {
  const { t } = useLanguage();

  const rows = [
    { key: "email", label: personalData.email, href: links.email },
    { key: "github", label: "github.com/Balbib99", href: links.github, external: true },
    { key: "linkedin", label: "linkedin.com/in/balbino-martinez", href: links.linkedin, external: true },
    { key: "cv", label: t.buttons.downloadCv, href: t.personalData.cvUrl, download: true },
  ];

  return (
    <section id="contacto" className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="04" eyebrow={t.contact.eyebrow} title={t.contact.title} />

        <p className="mb-10 max-w-[42ch] text-lg leading-relaxed text-ink-soft">{t.contact.description}</p>

        {/* Display type, not a section heading — the section already has its own h2. */}
        <p
          aria-hidden="true"
          className="mb-11 font-mono text-[2.6rem] font-semibold leading-[0.94] tracking-tight sm:text-6xl lg:text-[7rem]"
        >
          Balbino
          <br />
          Martínez
        </p>

        <div className="grid gap-11 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-t border-line-strong">
            {rows.map((row) => (
              <a
                key={row.key}
                href={row.href}
                download={row.download}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between gap-4 border-b border-line-strong px-3 py-4 font-mono text-base text-ink transition-colors hover:bg-invert-bg hover:text-invert-ink"
              >
                <span className="truncate">{row.label}</span>
                <span className="shrink-0 text-xs opacity-60">{row.key}</span>
              </a>
            ))}
          </div>

          <div>
            <p className="mb-5 font-mono text-xs lowercase text-ink-faint">// {t.contact.formTitle}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
