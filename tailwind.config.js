/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Overpass: 'Overpass',
        ubuntu: 'Ubuntu',
      },
      colors: {
        Primary: {
          light: 'hsl(356, 100%, 66%)',
          veryLight: 'hsl(355, 100%, 74%)',
          dark: 'hsl(208, 49%, 24%)',
        },
        Neutral: {
          grayishBlue: 'hsl(240, 2%, 79%)',
          darkGrayishBlue: 'hsl(207, 13%, 34%)',
          darkBlackBlue: 'hsl(240, 10%, 16%)',
        },
      },
    },
  },
  plugins: [],
};
