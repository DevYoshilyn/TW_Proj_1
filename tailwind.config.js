/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors:{
        'primary' :"#97d40d",
        'accent' :"#97ECAE",
        'hover' :"#7cae0c",
      },
      fontFamily:{
        'inter':['Inter']
      },
      fontWeight:{
        'reg':500,
        'med':600,
        'semi':700,
        'bold':800,
        'black':900,
      }
    },
  },
  plugins: [],
}
