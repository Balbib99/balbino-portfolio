import type { Language } from "../i18n";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export const LanguageToggle = ({ language, onChange, label }: LanguageToggleProps) => (
  <div
    className="inline-flex h-11 items-center rounded-lg border border-slate-300 bg-white p-1 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
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
            ? "bg-slate-950 text-white dark:bg-teal-400 dark:text-slate-950"
            : "hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-800 dark:hover:text-white"
        }`}
        aria-pressed={language === option}
      >
        {option}
      </button>
    ))}
  </div>
);
