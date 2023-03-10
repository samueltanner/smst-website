/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {
            primary: 'red',
          },
        },
      },
      themes: [
        {
          name: 'default',
          extend: {
            colors: {
              primary: '#18181b',
              secondary: '#164e63',
              accent: 'white',
              offWhite: '#E6E4E2',
            },
            fontFamily: {
              primary: ['soleil', 'sans-serif'],
              secondary: ['bookmania', 'serif'],
            },
          },
        },
        {
          name: 'mark',
          extend: {
            colors: {
              primary: '#eab308',
              secondary: '#18181b',
              accent: 'red',
              offWhite: '#E6E4E2',
            },
            fontFamily: {
              primary: ['tomarik-display', 'sans-serif'],
              secondary: ['marco', 'serif'],
            },
          },
        },
        {
          name: 'woodsy',
          extend: {
            colors: {
              primary: '#414833',
              secondary: '#2C2C2C',
              accent: '#C2CDAA',
              offWhite: '#E6E4E2',
            },
            fontFamily: {
              primary: ['bd-supper', 'sans-serif'],
            },
          },
        },
        {
          name: 'desert',
          extend: {
            colors: {
              primary: '#49473E',
              secondary: '#778C8E',
              accent: '#C2CDAA',
              dark: '#49473E',
              black: '#212524',
              offWhite: '#E6E4E2',
            },
            fontFamily: {
              primary: ['p22-mackinac-pro', 'serif'],
            },
          },
        },
      ],
    }),
  ],
}
