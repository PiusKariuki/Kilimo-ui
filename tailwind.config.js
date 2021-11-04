const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "200px", max: "350px" },
      },
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
      fontFamily: {
        sans: ['"Zen Kurenaido"', "sans-serif"],
      },
      inset: {
        46: "46%",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
  important: true,
};
