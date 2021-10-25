const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        pink: colors.pink,
        indigo: colors.indigo,
        blue: colors.blue,
        white: colors.white,
        amber: colors.amber,
        rose: colors.rose,
        lime: colors.lime,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Zen Kurenaido"', "sans-serif"],
      },
      height: {
        "40v": "40vh",
        "60v": "60vh",
        "88v": "88vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
