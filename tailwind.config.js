/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: '#acb4b8',
        fighting: '#d56723',
        flying: '#3dc7ef',
        poison: '#b97fc9',
        ground: '#f7de3f',
        rock: '#a38c21',
        bug: '#729f3f',
        ghost: '#7b62a3',
        steel: '#9eb7b8',
        fire: '#f96d6c',
        water: '#76bdfd',
        grass: '#49D0B0',
        electric: '#ffd86f',
        psychic: '#fa7179',
        ice: '#58c9b9',
        dragon: '#53a4cf',
        dark: '#707070',
        fairy: '#fdb9e9',
        unknown: '#68a090'
      },

      fontFamily: {
        nunito: 'Nunito, sans-serif'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

