const colors = require('@tailwindcss/postcss7-compat/colors')
const plugin = require('tailwindcss/plugin')
const scrollbar = require('tailwind-scrollbar')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-white': '#F6F8FF',
      'primary-orange': '#FC8B40',
      'primary-black': '#191B1F',
      'primary-grey': '#20232B'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [
    scrollbar,
    plugin(({ addUtilities, addComponents, theme }) => {
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        '.between': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.center': { margin: '0 auto' },
        '.container': {
          maxWidth: '1920px',
          width: '100%',
          margin: '0 auto'
        },
        '.content-container': {
          maxWidth: '920px',
          width: '100%',
          margin: '0 auto'
        },
        '.primary-blur': {
          background: 'linear-gradient(91.03deg, rgba(255, 254, 254, 0.23) -47.11%, rgba(255, 254, 254, 0.23) 110.32%)',
          backdropFilter: 'blur(30px)'
        },
        '.max-w-130-px': { maxWidth: '130px' },
        '.max-w-150px': { maxWidth: '150px' },
        '.max-h-85vh': { maxHeight: '85vh' },
        '.w-50px': { width: '50px' },
        '.f-p': { padding: '50px 0 20px 0' },
        '.h-50px': { height: '50px' },
        '.py-50px': { paddingTop: '50px', paddingBottom: '50px' },
        '.w-30px': { width: '30px' },
        '.rounded-l-40px': { borderRadius: '40px 0px 0px 40px' },
        '.hover-underline': {
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        '.hover-scale': {
          '&:hover': {
            transform: 'scale(1.3)'
          }
        },
        '.screen-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        },
        '.hover-select': {
          '&:hover': {
            background: theme('colors[primary-orange]')
          }
        },
        '.card-gradient': {
          background: `linear-gradient(179.96deg, rgba(0, 0, 0, 0) 31.56%, ${theme('colors.primary-orange')} 86.9%)`,
          backdropFilter: 'blur(3px)'
        },
        '.transition-bottom': {
          transition: 'transform 0.5s'
        },
        '.transition-w': {
          transition: 'width 0.5s'
        },
        '.w-85%': { width: '85%' },
        '.hover-item': {
          '&:hover': {
            borderBottom: `1px solid ${theme('colors.primary-grey')}`
          }
        }
      })
      addComponents({
        '.btn-primary': {
          maxWidth: '160px',
          width: '100%',
          border: 'none',
          background: theme('colors[primary-orange]'),
          color: theme('colors[primary-white]'),
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '18px',
          padding: '10px 15px',
          textAlign: 'center'
        },
        '.blur-ellipse': {
          background: theme('colors[primary-orange]'),
          filter: 'blur(4px)'
        }
      })
    })
  ],
}
