/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '769px',      // Small screens
      'md': '1160px',  // Example of custom screen range
    },
    extend: {},
  },
  plugins: [],
}