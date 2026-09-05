import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface-0 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalData.name}. {t.footer.text}
        </p>
        <div className="flex gap-4">
          <a className="transition hover:text-ink" href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-ink" href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
