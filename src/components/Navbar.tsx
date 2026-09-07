import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Ignore jitter so the header doesn't flicker on tiny movements.
      if (Math.abs(y - lastY.current) > 6) {
        setIsHidden(y > lastY.current && y > 140);
        lastY.current = y;
      }
      setIsStuck(y > 4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg pt-2 transition-[transform,border-color] duration-300 ${
        isStuck ? "border-line" : "border-transparent"
      } ${isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-4 sm:px-6 lg:px-8" aria-label={t.nav.aria}>
        <a href="#inicio" onClick={closeMenu} className="mr-auto text-base font-semibold leading-tight text-ink">
          Balbino
          <br />
          Martínez
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {t.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink-soft transition hover:text-ink">
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>

        <LanguageToggle language={language} onChange={setLanguage} label={t.language.label} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={t.theme} />

        <button
          type="button"
          className="grid h-8 w-8 shrink-0 place-items-center rounded border border-line-strong text-ink-soft transition hover:text-ink lg:hidden"
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
          >
            {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-line px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded px-3 py-2.5 text-sm text-ink-soft transition hover:bg-bg-raised hover:text-ink"
              >
                {item.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
