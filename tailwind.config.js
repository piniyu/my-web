const colors = require('tailwindcss/colors')
module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        black: 'rgb(34	34	34)',
        beige: 'rgb(230,230,230)',

        'border-gray': '#887b6d',
        highlight: '#1d4629',
        primary: '#bca188',
        // hightlight: '',
        // primary: colors.slate[200],
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
}
