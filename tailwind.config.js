/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'cubg':"url('https://www.distancecollege.in/images/Chandigarh-University.jpg')"
      }
    },
  },
  plugins: [],
}