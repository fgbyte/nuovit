/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./../assets/img/companie-desktop-01-1.webp')",
        'custom-bg-form': "url('./../assets/img/img-contact-form-1.webp')",
        'custom-bg-contact': "url('./../assets/img/hero-contact-desktop-1.webp')",
        'custom-bg-empresa': "url('./../assets/img/how-it-works-desktop-02.webp')",
        'custom-bg-como-funciona': "url('./../assets/img/our-food-desktop-01-1.webp')",
        'custom-bg-price': "url('./../assets/img/how-menus-1.webp')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        negro: '#1B1B1B',
        yellowsec: '#EAC355',
        sandclaro: '#F0EAE1',
        sandoscuro: '#DBD8CE',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}