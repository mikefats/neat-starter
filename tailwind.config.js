module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'michael-yellow': '#FAFF00',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
