const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#90291D',
        secondary: '#4F1610'
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
