const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts.jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        100: "#9999ff",
        200: "#8a8ae6",
        300: "#7a7acc",
        400: "#6b6bb3",
        500: "#5c5c99",
        600: "#4d4d80",
        700: "#3d3d66",
        800: "#2e2e4c",
        900: "#1f1f33",
      },
      positive: {
        100: "#99ff99",
        200: "#8ae68a",
        300: "#7acc7a",
        400: "#6bb36b",
        500: "#5c995c",
        600: "#4d804d",
        700: "#3d663d",
        800: "#2e4c2e",
        900: "#1f331f",
      },
      negative: {
        100: "#ff9999",
        200: "#e68a8a",
        300: "#cc7a7a",
        400: "#b36b6b",
        500: "#995c5c",
        600: "#804d4d",
        700: "#663d3d",
        800: "#4c2e2e",
        900: "#331f1f",
      },
      modal: "#000000aa",
    },
  },
  plugins: [],
};
