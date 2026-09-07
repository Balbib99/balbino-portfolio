import type { Language } from "../i18n";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export const LanguageToggle = ({ language, onChange, label }: LanguageToggleProps) => (
  <div className="shrink-0 text-right text-xs leading-normal" aria-label={label} role="group">
    {(["es", "en"] as const).map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        aria-pressed={language === option}
        className={`block w-full capitalize transition ${
          language === option ? "text-ink underline underline-offset-[3px]" : "text-ink-faint hover:text-ink-soft"
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);
