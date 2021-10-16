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
        brown: colors.brown,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Nunito"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
