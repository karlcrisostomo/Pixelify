/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    gridTemplateColumns:{
      "custom" : 'repeat(auto-fill, minmax(300px, 1fr))'
    }
    },
  },
  plugins: [],
};
