/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/poster.jpg')",
      },
      width:{
        "300":"300px",
        "200":"200px",
      },
      colors:{
        "logoColor":"#f40b7e",
        "themeColor":"#13161F",
      },
      spacing:{
        "120":"120px",
        "250":"250px"
      },
      inset: {
        '10': '2.5rem',
      }
    },
  },
  plugins: [],
}

