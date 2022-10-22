/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
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
        DEFAULT: "#0768F7",
      },
    },
  },
  plugins: [],
};
