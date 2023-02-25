/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
    "../../../packages/nordice-core/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-seriff"],
      },
    },
  },
  plugins: [],
  presets: [require("@nordice/tailwind-config")],
};