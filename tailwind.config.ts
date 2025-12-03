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
        "raleway": ["var(--font-raleway)"],
        "manrope": ["var(--font-manrope)"],
        "quicksand": ["var(--font-quicksand)"],
      }
    },
  },
  plugins: [],
};
export default config;