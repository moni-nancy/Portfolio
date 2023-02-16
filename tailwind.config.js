/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
     },
    extend: {
      colors: {
       hoverOne:'#fef3c7',
       hoverTwo:'#60a5fa'
      },
      boxShadow: {
       '2xl': ' 5px 5px  rgba(0, 0, 0, 0.164)'
      }
    },
  },
  plugins: [],
  fontFamily:{
    text:["Montserrat", "sans-serif"],
    header:["Nunito Sans", "sans-serif"],
  }
}
