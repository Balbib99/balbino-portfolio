import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language } from "../i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)["es"];
};

const storageKey = "portfolio-language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(storageKey);
  return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "es";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.seo.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", t.seo.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", t.seo.description);
  }, [language, t]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
