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
    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-800 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700/80 dark:bg-[#0b1220] dark:text-slate-200 dark:shadow-inner dark:shadow-black/20 dark:hover:border-teal-400/50 dark:hover:bg-[#101827] dark:hover:text-teal-200 dark:focus-visible:border-teal-400/70"
    aria-label={theme === "dark" ? labels.toLight : labels.toDark}
    title={theme === "dark" ? labels.light : labels.dark}
  >
    {theme === "dark" ? (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
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
        width="18"
        height="18"
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
