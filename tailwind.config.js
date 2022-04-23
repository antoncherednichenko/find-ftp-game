const colors = require('@tailwindcss/postcss7-compat/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-white': '#F6F8FF',
      'primary-green': '#4bc77c',
      'primary-black': '#0F1923',
      'primary-grey': '#242A38',
      'primary-dark': '#10061E'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, addComponents, theme }) => {
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        '.center': { margin: '0 auto' },
        '.container': {
          maxWidth: '1920px',
          width: '100%',
          margin: '0 auto',
          padding: '0 15px'
        },
        'primary-blur': {
          background: 'linear-gradient(91.03deg, rgba(255, 254, 254, 0.23) -47.11%, rgba(255, 254, 254, 0.23) 110.32%)',
          backdropFilter: 'blur(30px)'
        }
      })
      addComponents({
        '.btn-primary': {
          maxWidth: '200px',
          width: '100%',
          border: 'none',
          background: theme('colors[primary-green]'),
          color: theme('colors[primary-white]'),
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '18px',
          padding: '10px 15px',
          textAlign: 'center',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'
          }
        },
        '.blur-ellipse': {
          background: theme('colors[primary-green]'),
          filter: 'blur(4px)'
        }
      })
    })
  ],
}
