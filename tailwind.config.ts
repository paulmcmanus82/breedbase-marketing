import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "warm-white": "#FAFAF7",
        "near-black": "#0C0C0A",
        "ink": "#1A1A18",
        "muted": "#6B6B63",
        "accent": "#C8F04A",
        "hairline": "#E5E5E0",
        "dark-muted": "#9A9A92",
        "dark-border": "#2A2A28",
        "surface": "#F0F0EC",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      letterSpacing: {
        widest: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
