/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'noto': ['Noto Serif', 'sans-serif'],
        // 'inter': ['Inter', 'serif'],
        // 'tilt': ['Tilt Prism', 'cursive']
        'IBM': ['IBM Plex Mono', 'monospace']

      }
      
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    
  ],
}

