<h1 align="center">Nordice ❄️</h1>

## Install

```sh
yarn add @nordice/core @nordice/tailwind-config
```

add this to your tailwind config

```js
module.exports = {
  content: [
    "./node_modules/@nordice/core/**/*.{js,mjs}", 
    // other content..
  ],
  presets: [require("@nordice/tailwind-config")],
  // other config
};
```