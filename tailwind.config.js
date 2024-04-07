/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}", "./dist/flowbite.min.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        mainColor: "#007546",
        secondaryColor: "#C0F9E2",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
