import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Shared neutrals — used on both marketing site and app
        "warm-white": "#FAFAF7",   // page background
        "near-black": "#0C0C0A",   // dark sections, dark buttons
        "ink": "#1A1A18",           // primary text
        "muted": "#6B6B63",         // secondary text
        "hairline": "#E5E5E0",      // subtle borders
        "surface": "#F0F0EC",       // muted chip/badge backgrounds
        "dark-muted": "#9A9A92",    // text on dark backgrounds
        "dark-border": "#2A2A28",   // borders on dark backgrounds

        // Brand blue — the primary interactive colour
        // Same oklch value as app's dark-mode sidebar-primary
        "brand-blue": "#2557D6",
        "brand-blue-light": "#EEF3FF", // tinted bg for badges/highlights

        // Marketing-only accent — used sparingly (CTAs, hero highlight)
        "accent": "#C8F04A",
      },
      fontFamily: {
        // Fraunces: display headlines on marketing site only
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        // Manrope: body, UI, nav — shared with the app
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
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
