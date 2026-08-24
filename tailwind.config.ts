import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== New theme: Deep Ocean Blue + Amber =====
        brand: {
          50: "#eef4fb",
          100: "#d7e6f5",
          200: "#b0cdec",
          300: "#7fabdd",
          400: "#4d84c9",
          500: "#2f66ac",
          600: "#22508c",
          700: "#1b3f70",
          800: "#152f54", // primary deep navy
          900: "#0f2140", // darkest navy
          950: "#0a1730",
        },
        accent: {
          50: "#fff8ec",
          100: "#ffedc7",
          200: "#ffd98a",
          300: "#ffc04d",
          400: "#ffab24",
          500: "#f5920f", // primary amber
          600: "#d8760a",
          700: "#b3590c",
          800: "#8f4610",
          900: "#753b12",
        },
        cream: "#FAF7F1",
        sand: "#F1ECE0",
        ink: "#182231",
        slate: {
          muted: "#5C6B7A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        data: ["var(--font-data)", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 12px 12px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15,33,64,0.22)",
        card: "0 6px 20px -8px rgba(24,34,49,0.14)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(.22,.61,.36,1) forwards",
        "scroll-pulse": "scrollPulse 1.8s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
