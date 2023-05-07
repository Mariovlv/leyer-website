/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      noto: ["Noto Sans JP", "sans-serif"],
      epilogue: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
};
