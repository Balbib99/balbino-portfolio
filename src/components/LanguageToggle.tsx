import type { Language } from "../i18n";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export const LanguageToggle = ({ language, onChange, label }: LanguageToggleProps) => (
  <div
    className="inline-flex h-11 items-center rounded-lg border border-slate-300 bg-white p-1 text-sm font-bold text-slate-700 transition dark:border-slate-700/80 dark:bg-[#0b1220] dark:text-slate-300 dark:shadow-inner dark:shadow-black/20 dark:focus-within:border-teal-400/70"
    aria-label={label}
    role="group"
  >
    {(["es", "en"] as const).map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={`h-8 rounded-md px-3 uppercase transition ${
          language === option
            ? "bg-slate-950 text-white dark:bg-teal-400/90 dark:text-slate-950"
            : "hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-[#101827] dark:hover:text-slate-100 dark:focus-visible:bg-[#101827] dark:focus-visible:text-teal-100"
        }`}
        aria-pressed={language === option}
      >
        {option}
      </button>
    ))}
  </div>
);
