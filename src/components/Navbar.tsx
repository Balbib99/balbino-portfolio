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
    <header className="sticky top-0 z-50 border-b border-line bg-surface-1 transition-colors duration-300">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={t.nav.aria}
      >
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-line-strong bg-surface-2 font-mono text-[0.6875rem] font-semibold text-ink">
            BM
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">{personalData.displayName}</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent py-2 font-mono text-xs text-ink-muted transition hover:border-signal hover:text-ink"
            >
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 rounded-full border border-signal bg-signal/10 px-2.5 py-1 font-mono text-[0.6875rem] text-signal-strong md:inline-flex">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-signal motion-safe:animate-pulse motion-reduce:animate-none"
            />
            {t.nav.status}
          </span>
          <LanguageToggle language={language} onChange={setLanguage} label={t.language.label} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={t.theme} />
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-surface-2 text-ink-secondary transition hover:border-signal hover:text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={t.nav.openMenu}
            onClick={() => setIsOpen((current) => !current)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="16"
              height="16"
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
        <div id="mobile-menu" className="border-t border-line bg-surface-1 px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-sm px-3 py-2.5 font-mono text-sm text-ink-secondary transition hover:bg-surface-2 hover:text-ink"
              >
                {item.label.toLowerCase()}
              </a>
            ))}
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-signal bg-signal/10 px-2.5 py-1 font-mono text-[0.6875rem] text-signal-strong">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
              {t.nav.status}
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
};
