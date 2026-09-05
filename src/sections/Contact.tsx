import { ContactForm } from "../components/ContactForm";
import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Contact = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "email", label: personalData.email, href: links.email },
    { key: "linkedin", label: "linkedin.com/in/balbino-martinez", href: links.linkedin, external: true },
    { key: "github", label: "github.com/Balbib99", href: links.github, external: true },
    { key: "cv", label: t.buttons.downloadCv, href: t.personalData.cvUrl, download: true },
  ];

  return (
    <section id="contacto" className="bg-surface-0 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="07"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-line bg-surface-1">
            {quickLinks.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                download={item.download}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-between gap-3 px-5 py-4 transition hover:bg-surface-2 focus-visible:outline-offset-[-2px] ${
                  index !== quickLinks.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="font-mono text-xs text-ink-muted">{item.key}</span>
                <span className="truncate text-sm text-ink">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="rounded-md border border-line bg-surface-1 p-6 sm:p-7">
            <p className="mb-5 font-mono text-xs lowercase text-ink-muted">{t.contact.formTitle}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
