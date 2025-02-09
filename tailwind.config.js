/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Rokh' : 'Rokh Medium',
        'RokhBold' : 'Rokh Bold',
      },
    },
  },
  plugins: [],
}