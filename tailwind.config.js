/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Dana' : 'Dana Regular',
        'DanaBold' : 'Dana DemiBold',
      },
    },
  },
  plugins: [],
}