import { useLanguage } from "../context/LanguageContext";
import { links, personalData } from "../data/portfolioData";

export const Footer = () => {
  const { t } = useLanguage();

  return (
  <footer className="border-t border-slate-200 bg-white px-4 py-8 dark:border-white/10 dark:bg-[#070b14] sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {personalData.name}. {t.footer.text}</p>
      <div className="flex gap-4">
        <a className="font-semibold hover:text-teal-700 focus-visible:text-teal-700 dark:hover:text-teal-300 dark:focus-visible:text-teal-300" href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="font-semibold hover:text-teal-700 focus-visible:text-teal-700 dark:hover:text-teal-300 dark:focus-visible:text-teal-300" href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
  );
};
