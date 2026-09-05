import type { Language } from "../i18n";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export const LanguageToggle = ({ language, onChange, label }: LanguageToggleProps) => (
  <div
    className="inline-flex h-8 items-center gap-0.5 rounded-sm border border-line bg-surface-2 p-0.5 font-mono text-xs text-ink-secondary"
    aria-label={label}
    role="group"
  >
    {(["es", "en"] as const).map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={`h-full rounded-[2px] px-2 uppercase transition ${
          language === option ? "bg-surface-3 text-ink" : "hover:bg-surface-3/60 hover:text-ink"
        }`}
        aria-pressed={language === option}
      >
        {option}
      </button>
    ))}
  </div>
);
