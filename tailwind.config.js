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
        background: '#002833',
        primary: '#002029',
        container: '#245C6A',
        subContainer: '#90E0EF',
        textPrimary: 'white',
        heading: '#54DAFF',
        button: '#C0D4D8',
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
    },
  },
  plugins: [],
};
