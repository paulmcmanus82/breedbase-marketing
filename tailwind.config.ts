import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal:           "var(--color-teal)",
        "teal-dark":    "var(--color-teal-dark)",
        "teal-light":   "var(--color-teal-light)",
        amber:          "var(--color-amber)",
        "amber-dark":   "var(--color-amber-dark)",
        "amber-light":  "var(--color-amber-light)",
        charcoal:       "var(--color-charcoal)",
        "charcoal-dark":"var(--color-charcoal-dark)",
        surface:        "var(--color-surface)",
        canvas:         "var(--color-bg)",
        rule:           "var(--color-border)",
        ink:            "var(--color-text-primary)",
        muted:          "var(--color-text-muted)",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        inter:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
