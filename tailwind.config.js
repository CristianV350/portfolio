/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors:{
      'orange': '#F96745',
      'green': '#00B67A',
      'dark': '#1D1F23',
      'black': '#05070F',
      'gray': '#757885',
      'secondary': '#f8f8f8',
      'main': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

