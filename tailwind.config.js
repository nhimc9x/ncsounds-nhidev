/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sxs': '440px',
        'xs': '475px',
        'sms': '576px',
        'mdl': '960px'
      },
      fontFamily: {
        'ncs-font-Kanit': ['Kanit', 'sans-serif']
      },
      colors: {
        'ncs-primary-color': '#1d2238',
        'ncs-secondary-color': '#262d47',
        'ncs-text-color': '#a3a1be',
        'ncs-active-color': '#80f0ff'
      },
      animation: {
        'show-up': 'showUp .4s ease-in-out',
        'show-down': 'showDown .4s ease-in-out',
        'show-in': 'showIn .2s ease-in-out',
        'playing': 'playing 8s linear infinite',
        'alert': 'alert 1s ease-in-out'
      },
      keyframes: {
        'showUp': {
          'from': { transform: 'translateY(100%)', opacity: 0.5 },
          'to': { transform: 'translateY(0)', opacity: 1 }
        },
        'showDown': {
          'from': { transform: 'translateY(-10px)', opacity: 0.5 },
          'to': { transform: 'translateY(0)', opacity: 1 }
        },
        'showIn': {
          'from': { transform: 'scale(0.9)', opacity: 0 },
          'to': { transform: 'scale(1)', opacity: 1 }
        },
        'playing': {
          'to': { transform: 'rotate(360deg)' }
        },
        'alert': {
          'from': { opacity: 0 },
          'to': { opacity: 1 }
        },
      }
    }
  },
  plugins: []
}
