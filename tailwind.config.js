/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily:{
        default: ['monospace'],
      },
      colors: {
        bgColor: '#1d4ed8'
      }
    },
  },
  plugins: [],
};
