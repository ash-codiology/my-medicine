/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app//*.{js,ts,jsx,tsx}',
    './src/components//*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#3B82F6', // Custom secondary color
      },
    },
  },
  plugins: [],
}