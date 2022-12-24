/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    screens: {
      'xs': {
        max: '380px'
      },

      'sm': {
        max: '640px'
      },

      'lg': {
        max: '768px'
      },

      'm': {
        max: '1050px'
      },

      'xl': {
        max: '1280px'
      },

      '3xl': {
        min: '1750px'
      }
    },

    extend: {
      colors: {
        main: '#8A84E2',
        secondary: '#FFCF56',
        'dark-gray': '#181616',
        'soft-black': '#100E0E'
      },

      minWidth: {
        '1': '100px',
        '1.5': '150px',
        '2': '200px',
        '2.5': '250px',
        '3': '300px',
        '3.5': '350px',
        '4': '400px',
        '4.5': '450px',
        '5': '500px',
        '5.5': '550px',
        '6': '600px',
        '6.5': '650px',
        '7': '700px',
        '7.5': '750px',
        '8': '800px',
      },

      minHeight: {
        '1': '100px',
        '2': '200px',
        '3': '300px',
        '3.5': '350px',
        '4': '400px',
        '4.5': '450px',
        '5': '500px',
        '6': '600px'
      },

      fontFamily: {
        'work-sans': 'Work Sans'
      }
    },
  },
  plugins: [],
}
