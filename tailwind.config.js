/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{'heightscroll':'300rem'},
      margin:{'2px':'2px'},
      colors:{'PrimaryColor':'#14b8a6'},
      maxWidth:{'1000':'50rem'}
    },
  },
  plugins: [],
}