/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      navBg: "#1B3409",
      text: "#C9C926",
      white: "#FFFFFF",
      content: "#F7F7D4",
      theme: "#66B032",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    animation: {
      fade: "fadeOut 5s ease-in-out",
    },
    // that is actual animation
    keyframes: (theme) => ({
      fadeOut: {
        "0%": { backgroundColor: theme("colors.red.300") },
        "100%": { backgroundColor: theme("colors.transparent") },
      },
    }),
  },
};
export const plugins = [];
