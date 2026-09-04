import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { personalData } from "../data/portfolioData";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-paper/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-[#070b14]/95 dark:shadow-[0_18px_60px_-52px_rgba(0,0,0,0.75)]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[1.125rem] sm:px-6 lg:px-8"
        aria-label={t.nav.aria}
      >
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3 rounded-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:border dark:border-teal-400/30 dark:bg-[#0d1b24] dark:text-teal-200">
            BM
          </span>
          <span className="hidden text-sm font-bold text-slate-950 dark:text-slate-100 sm:inline">
            {personalData.displayName}
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-[#101827] dark:hover:text-slate-50 dark:focus-visible:bg-[#101827] dark:focus-visible:text-teal-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} onChange={setLanguage} label={t.language.label} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={t.theme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700/80 dark:bg-[#0b1220] dark:text-slate-100 dark:hover:border-teal-400/50 dark:hover:bg-[#101827] dark:focus-visible:border-teal-400/70 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={t.nav.openMenu}
            onClick={() => setIsOpen((current) => !current)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-paper px-4 py-3 dark:border-slate-800/80 dark:bg-[#070b14] lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-[#101827] dark:hover:text-slate-50 dark:focus-visible:bg-[#101827] dark:focus-visible:text-teal-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
