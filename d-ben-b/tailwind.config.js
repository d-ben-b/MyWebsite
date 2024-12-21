/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#4424D6",
      text: "#fff",
      footer: "#110934",
      footerText: "#8C78E8",
      content: "#E5E0FA",
      danger: "#E0245E",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};
export const plugins = [];
