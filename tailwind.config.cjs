
// @import url('https://fonts.googleapis.com/css2?family=Inter&family=Noto+Serif&display=swap');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Serif', 'sans-serif'],
        'inter': ['Inter', 'serif'],

      }
      
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

