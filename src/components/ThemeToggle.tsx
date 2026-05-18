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
    <span aria-hidden="true" className="text-lg">
      {theme === "dark" ? "☀" : "☾"}
    </span>
  </button>
);
