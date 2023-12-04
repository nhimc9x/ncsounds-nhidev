/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sms': '576px',
        'mdl': '960px'
      },
      fontFamily: {
        'ncs-font-Kanit' : ['Kanit', 'sans-serif']
      },
      colors: {
        'ncs-primary-color': '#1d2238',
        'ncs-secondary-color': '#262d47',
        'ncs-text-color': '#a3a1be',
        'ncs-active-color': '#80f0ff'
      }
    }
  },
  plugins: []
}
