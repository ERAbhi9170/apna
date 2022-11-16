/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary':'#130421',
        'secondary': '#1C0730',
        'golden':'#FEEF9C'
      }
    },
  },
  plugins: [],
};
