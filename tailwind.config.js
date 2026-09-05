/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 60px -36px rgba(14, 23, 40, 0.35)",
      },
      colors: {
        // Panel de Sistema — design-system tokens, swap automatically with the
        // existing .dark class via the CSS custom properties in index.css.
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          secondary: "var(--ink-secondary)",
          muted: "var(--ink-muted)",
        },
        signal: {
          DEFAULT: "rgb(var(--signal-rgb) / <alpha-value>)",
          strong: "rgb(var(--signal-strong-rgb) / <alpha-value>)",
        },
        amber: {
          DEFAULT: "rgb(var(--amber-rgb) / <alpha-value>)",
          strong: "rgb(var(--amber-strong-rgb) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--danger-rgb) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
