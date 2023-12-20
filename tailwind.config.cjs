/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-touch')(), require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
