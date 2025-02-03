/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
          background: 'white',
          container: '#EDEDE9',
          subContainer: '#FBFBFA',

          heading: 'black',
          subHeading: 'black',
          regular: '#5B514A',

          button: '#52B788',

          borderColor: '#666666', 
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
      screens: {
        'xs': '480px', // Custom breakpoint for small screens
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
