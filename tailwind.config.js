/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Slab", "monospace"],
      },
      keyframes: {
        pulse: {
          "0%": { opacity: "1" },
          "30%": { opacity: "0" },
          "70%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        oscillator: "pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    colors: {
      black: {
        200: "#333333",
        100: "#242426",
        DEFAULT: "#1A1A1A",
      },
      white: {
        DEFAULT: "#FFFAFA",
      },
      beige: {
        DEFAULT: "#F2EAE4",
      },
      red: {
        DEFAULT: "#F20519",
      },
      yellow: {
        DEFAULT: "#F2CB05",
      },
      green: {
        DEFAULT: "#09A603",
      },
      blue: {
        100: "#0545A6",
        DEFAULT: "#0768F7",
      },
    },
  },
  plugins: [],
};
