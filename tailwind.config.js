/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1250px'
      },
      colors: {
        white: '#FFFFFF',
        sand: '#F0EAE1',
        yellow: '#EAC355',
        madera: '#AF917C',
        negro: '#1B1B1B',
        whiteTextFooter: '#E9E9E9',
        grayTextFooter: '#909090',
      },
      fontFamily: {
        primary: ['Roboto'],
        secondary: ['Playfair Display'],
        special: ['Roboto Serif 72pt Condensed'],

      },
      boxShadow: {
        s100: '0px 4px 4px 0px rgba(167, 176, 192, 0.16)',
        s200: '0px 8px 12px 0px rgba(167, 176, 192, 0.32)',
        s300: ' 0px 12px 20px 0px rgba(167, 176, 192, 0.24)',
        s400: '0px 18px 24px 0px rgba(167, 176, 192, 0.30)',
        s500: '0px 20px 28px 0px rgba(167, 176, 192, 0.40)',
      }
    },
  },
  plugins: [],
}