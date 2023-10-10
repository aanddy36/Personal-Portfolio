/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'monospace'],
      'github': ['Courier New', 'Courier', 'monospace']
    },
    screens: {
      'full':'1000px',
      'laptop': '750px',
      'tablet': '490px'
    },
    extend: {
      backgroundSize:{
        custom: "25em",
      },
      boxShadow:{
        pp: "0 0 100px rgba(89, 216, 255, 0.541)"
      },
      transitionProperty:{
        'dimensions': 'width, height, scale'
      },
      backgroundColor:{
        custom: "#100316"
      }
    },
  },
  plugins: [],
}

