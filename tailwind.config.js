module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
  },
  // purge: [
  //   'components/**/*.vue',
  //   'layouts/**/*.vue',
  //   'pages/**/*.vue',
  //   'plugins/**/*.js',
  //   'nuxt.config.js'
  // ],
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    minHeight: {
      fit: 'fit-content',
      0: '0'
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        christo: {
          default: '#f6f2d7',
          'dark-1': '#4a5568',
          'dark-2': '#1a202c',
          'light-1': '#e2e8f0',
          'light-2': '#a0aec0',
          'dark-3': '#00040a',
          'light-3': '#cccccc',
        },
      },
      fontSize: {
        default: '14px',
        md: '16px',
        lg: '18px',
        title: '32px'
      },
      lineHeight: {
        title: '1.8'
      },
      height: {
        fit: 'fit-content',
        '150': '150px',
        '300': '300px'
      },
      width: {
        fit: 'fit-content',
        '150': '150px',
        '320': '320px'
      }
    },
    fontFamily: {
      display: [
        'Avenir',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      code: ['Courier']
    }
  },
  variants: {
    display: ['responsive'],
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
