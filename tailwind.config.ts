import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        "pulse-blue": "#2563EB",
        "pulse-violet": "#7C3AED",
        "pulse-green": "#10B981"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
        glow: "0 18px 60px rgba(37, 99, 235, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
