/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // Negativo — the palette is strictly monochrome and the light/dark
        // toggle swaps foreground and background wholesale. Tokens live in
        // index.css and follow the existing .dark class.
        bg: {
          DEFAULT: "var(--bg)",
          raised: "var(--bg-raised)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          faint: "var(--ink-faint)",
        },
        // The inverted pair: what reads as background on one theme reads as
        // foreground on the other. Used for hover/active states.
        invert: {
          bg: "var(--invert-bg)",
          ink: "var(--invert-ink)",
        },
        accent: {
          from: "var(--accent-from)",
          to: "var(--accent-to)",
        },
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};
