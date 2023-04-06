/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        air: "#7c9eb2",
        violetlight: "#52528C",
        violetdark: "#372554",
        emerald: "#61E786",
      },
    },
  },
  plugins: [],
};
