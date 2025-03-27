import { heroui } from "@heroui/theme";
import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/route/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        "primary": "#B07D44",
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    createThemes({
      light: {
        "white-ecf": "#ECF0F7",
        "white-fff80": "#FFFFFF80",

        "gray-8e8": "#8E8E8E",
        "gray-dfe": "#DFE4EA",

        "gold-b07": "#B07D44",
        "gold-dba": "#DBAA65",
        "gold-a87": "#A8743D",
        "gold-f1d": "#F1D5B0",

        "red-f64": "#F64C4C",
        "red-960": "#960100",
        "red-601": "#601414",
        "red-950": "#950100",
      },
    }),
  ],
};

module.exports = config;
