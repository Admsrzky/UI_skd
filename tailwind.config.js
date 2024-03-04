/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  
  darkMode:'class',
  theme: {
    extend: {
      colors: {
         primary:'#076AE1',
         secondary:'#86888B',
         dark: '#0f172a',
         darkSecondary:'#7dd3fc'
      }
    },
  },
  plugins: [],
}

