type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-800 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-300"
    aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
  >
    <span aria-hidden="true" className="text-lg">
      {theme === "dark" ? "☀" : "☾"}
    </span>
  </button>
);
