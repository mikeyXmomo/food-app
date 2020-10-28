module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'orange-999': '#FA4A0C',
        'blue-999': '#252B42',
        'gray-999': '#737373'
      },
      backgroundImage: {
        'food-hero' : "url('/food-hero.jpg')",
        'food-banner' : "url('/food-banner.jpg')"
      },
      fontFamily: {
        'monserrat': ['"Montserrat"', 'sans-serif'],
        'poppins': ['"Poppins"','sans-serif' ]
      },
      height: {
        '800': '800px',
        '600': '600px',
        '400': '400px'
      },
      inset: {
        '-100': '-100%'
      }
    },
  },
  variants: {},
  plugins: [],
}
