module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'CBlue': '#12447D',
        'CGray': '#858585',
        'CGold': '#d9b559',
      },
      fontFamily: {
        'sans':['Montserrat', 'ui-sans-serif'],
        'serif': ['Zilla Slab','ui-serif'],
        'display': ['Barlow','Montserrat','ui-sans-serif']

      },
      padding:{
        'nav':'64px',
      },
      height:{
        'nav':'64px',
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    minWidth:{
      '2/6': '33.333333%',
      '4/6': '66.666667%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap'),
  require("tailwindcss-debug-screens")],
}
