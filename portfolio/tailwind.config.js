/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      style: ['Alef', 'sans-serif']
    },
    extend: { 
      colors: {
      primaryColor: "rgba(0, 0, 0, 0.6)",
      headingColor: "#081e21",
      smallTextColor: "#040D12",
      colorButton:"#4e465e",
      colorText:'#CBE4DE',
      color:"#2E4F4F",
      color2:"#2C3333",
      hovercolor2:"#3d3d3d",
      hovercolor:"#5d5d5d",
      color3:"#04364A",
      Footer:"#383d41",
      Light:"#fafafa"
    },
  }
    ,
  },
  plugins: [],
}
