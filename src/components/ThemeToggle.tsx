type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
  labels: {
    light: string;
    dark: string;
    toLight: string;
    toDark: string;
  };
};

export const ThemeToggle = ({ theme, onToggle, labels }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-surface-2 text-ink-secondary transition hover:border-signal hover:text-ink"
    aria-label={theme === "dark" ? labels.toLight : labels.toDark}
    title={theme === "dark" ? labels.light : labels.dark}
  >
    {theme === "dark" ? (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
      </svg>
    )}
  </button>
);
