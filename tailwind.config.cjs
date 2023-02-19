/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2c55",
        secondary: "#0c0d34",
        accent: "#ffd600",
        neutral1: "#f2f2f2",
        neutral2: "#d6d6d6",
        neutral3: "#ffffff",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

