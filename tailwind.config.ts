/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#0c0b0a',
        char:      '#19130f',
        parchment: '#ece2c6',
        bone:      '#c8bd9f',
        wax:       '#7c1414',
        'wax-hi':  '#a32424',
        gold:      '#a9834a',
      },
      fontFamily: {
        blackletter: ['UnifrakturMaguntia', 'cursive'],
        serif:       ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:        ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%,100%': { opacity: '1' },
          '47%':     { opacity: '1' },
          '49%':     { opacity: '0.75' },
          '51%':     { opacity: '1' },
          '74%':     { opacity: '1' },
          '76%':     { opacity: '0.82' },
          '78%':     { opacity: '1' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker:         'flicker 5s ease-in-out infinite',
        'slide-in-right':'slide-in-right 0.45s cubic-bezier(0.2,0.7,0.2,1)',
        'fade-up':       'fade-up 0.55s ease forwards',
      },
    },
  },
  plugins: [],
}
