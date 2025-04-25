/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: { 
      fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // Add the custom font
      },
      margin: {
        '95%' : '95%',
        '5%' : '3%'
      }
    },
  },
  plugins: [],
}

