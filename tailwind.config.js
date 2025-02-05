/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A52236',
          light: '#C14356',
          dark: '#8A1C2D',
        },
      },
    },
  },
  plugins: [],
};