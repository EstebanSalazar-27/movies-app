/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1279px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '639px' },

      },

    },

    plugins: [],
  }
}
