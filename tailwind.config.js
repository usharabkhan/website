/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily:{
        default: ['sans-serif', 'monospace'],
      },
      colors: {
        background: '#03045E',
        primary: '#0077B6',
        secondary: '#00B4D8',
        container: '#90E0EF',
        textPrimary: '#CAF0F8',
      },
    },
  },
  plugins: [],
};
