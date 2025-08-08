/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'likya-dark': '#0f0f0f',
        'likya-dark-secondary': '#1e1e1e',
        'likya-orange': '#ff8c42'
      }
    },
    container: {
    center: true,
    padding: '1rem',
    }
},
  plugins: [],
}

