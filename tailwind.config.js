/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs':{'min': '360px', 'max': '630px'}
      },
      colors: {
        primary: "#000080",
        "appera-black": {
          DEFAULT: "#333333",
          500: "#33333380",
        },
        'primary2': '#073AAB',
        'secondary': '#182233',
        'secondary-2': '#B3CEE2',
        'secondary-3': '#D9DDE7',
        'dark': '#333333',
        'grey': '#1F2937',
        'grey2': '#6B6B6C',
        'blue-hue': '#5F96E9',
        'paused': '#5F96E9',
        'done': '#5ac08f',
        'in-progress': '#fabd22'
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
