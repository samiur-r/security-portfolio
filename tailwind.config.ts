import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-poppins)"],
        glancyr: ["Glancyr", "sans-serif"],
      },
      colors: {
        "dark-blue": "#313D46",
        "bright-orange": "#E8530E",
        "light-blue": "#5F7E9F",
        "light-gray": "#E5E7E8",
      },
    },
  },
  plugins: [],
};
export default config;
