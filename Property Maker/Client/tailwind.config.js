/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--primary-main)",
        },
        secondary: {
          main: "var(--secondary-main)",
        },
      },
    },
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
      "3xl": "1800px",
    },
  },
  plugins: [],
};
