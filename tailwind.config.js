/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Quicksand": ["Quicksand", "sans-serif"],
        "Monoton": ["Monoton", "cursive"],
      },
      colors: {
        "cocoa-bean": '#5a3e2b',
        "saffron-gold": '#f4a226',
        "burnt-orange": '#e5771f',
        "pale-peach": '#ffebb3',
        "aqua-marine": '#76c7ad'
      }
    },
  },
  plugins: [],
}

