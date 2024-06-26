/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        script: ["Script", "sans-serif"],
      },
      colors: {
        gold: "#F8DE22",
        logo: "#0080FF",
        lblue: "#98c1d9",
        lblack: "#293241",
        dblue: "#3d5a80",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
