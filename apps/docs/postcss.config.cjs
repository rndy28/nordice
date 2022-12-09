// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const config = require("@nordice/tailwind-config");

module.exports = {
  purge: [
    "src/**/*.{js,ts,jsx,tsx}",
    "stories/**/*.{ts,tsx,mdx}",
    "../../packages/nordice-core/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: {
    // Specifying the config is not necessary in most cases, but it is included
    // here to share the same config across the entire monorepo
    tailwindcss: { config },
    autoprefixer: {},
  },
};
