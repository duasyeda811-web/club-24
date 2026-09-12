import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#111113",
        "surface-card": "#121214",
        "surface-card-hover": "#17171a",
        brand: {
          red: "#FF1E27",
          "red-dark": "#D6131C",
          "red-light": "#FF454D",
          cyan: "#00D2FF",
          emerald: "#00F5A0",
        },
      },
      boxShadow: {
        "neon-red": "0 0 25px rgba(255, 30, 39, 0.4)",
        "neon-red-lg": "0 0 40px rgba(255, 30, 39, 0.6)",
        "neon-cyan": "0 0 25px rgba(0, 210, 255, 0.35)",
        "neon-emerald": "0 0 25px rgba(0, 245, 160, 0.35)",
        "glass-edge": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
