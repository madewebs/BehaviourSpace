import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter-tight": ["var(--font-inter-tight)"],
        "exo": ["var(--font-exo)"],
        "edu-hand": ["var(--font-edu-hand)"],
        "montserrat": ["var(--font-montserrat)"],
      }
    },
  },
  plugins: [],
};
export default config;