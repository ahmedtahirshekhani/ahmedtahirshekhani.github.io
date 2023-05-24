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
      footercolor: '#1E1E1E',
      linecolor:'#FFFFFF',
      secondaryText: '#0D9488',
      primaryBackground: '#000000'
    }
    
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes:["halloween"],
    
  }
}