import { ContactForm } from "../components/ContactForm";
import { LinkButton } from "../components/LinkButton";
import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Contact = () => {
  const { t } = useLanguage();

  const quickActions = [
    { label: t.buttons.downloadCv, href: t.personalData.cvUrl, variant: "secondary" as const, download: true },
    { label: t.buttons.linkedin, href: links.linkedin, variant: "secondary" as const, external: true },
    { label: t.buttons.github, href: links.github, variant: "secondary" as const, external: true },
    { label: t.buttons.viewNbaInsight, href: links.nbaInsight, variant: "ghost" as const, external: true },
  ];

  return (
  <section id="contacto" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{t.contact.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          {t.contact.description}
        </p>
        <div className="mt-7 rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{t.contact.availabilityTitle}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {t.contact.availabilityText} <span className="font-semibold text-teal-300">NBA Insight</span>.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{t.contact.formTitle}</p>
        <a className="mt-3 block text-lg font-semibold text-white transition hover:text-teal-300" href={links.email}>
          {personalData.email}
        </a>
        <div className="mt-6">
          <ContactForm />
        </div>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{t.contact.quickLinks}</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {quickActions.map((action, index) => (
            <LinkButton
              key={action.label}
              href={action.href}
              variant={action.variant}
              download={action.download}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              {action.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};
