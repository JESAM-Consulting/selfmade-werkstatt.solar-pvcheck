/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      visby: ["Visby", "system-ui"],
    },

    extend: {
      colors: {
        green: {
          1: "#E7B988",
        },
      },
    },
  },
  plugins: [],
};
