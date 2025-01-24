/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        garnet: "#8F001A",
        charcoal: "#2D2D2C",
        grey_blue: "#636d77",
      },
      fontFamily: {
        work: "Work Sans",
      },
    },
  },
  plugins: [],
};
