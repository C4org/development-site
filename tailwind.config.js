module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'CBlue': '#12447D',
        'CGray': '#858585',
        'CGold': '#d9b559',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
