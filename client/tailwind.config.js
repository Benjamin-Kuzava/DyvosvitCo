module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      fontFamily: {
        Itim: ['Itim', 'cursive']
      }
    },
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        base: '#000000',
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    },
    fill: (theme) => ({
      red: theme('colors.red.primary')
    })
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  purge: ['./src/**/*.{js,jsx}', './src/**/**/*.{js, jsx}', './public/index.html']
};
