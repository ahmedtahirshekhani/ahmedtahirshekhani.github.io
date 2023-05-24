/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      footercolor: '#1E1E1E'
    }
    
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes:["halloween"],
    
  }
}