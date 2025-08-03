/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      fontFamily:{
        Opensans: ["Open Sans", "sans-serif"],
        Playfair: ["Playfair", "serif"]
      },
      colors:{
        lightHover: '#Fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#000',
      },
      boxShadow:{
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
    },
  },
      darkMode: 'selector'
}