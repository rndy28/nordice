<h1 align="center">Nordice ❄️</h1>

#### A calming and minimalist personal design system based on nord color palette

## What's inside?

This design system includes the following:

### Apps and Packages

- `@nordice/docs`: A [Storybook](https://storybook.js.org/) documentation
- `@nordice/core`: core React components
- `@nordice/tailwind-config`: tailwind config

### Install

```sh
npm i @nordice/core
```

add this to your tailwind config

```js
module.exports = {
    content: ["./node_modules/@nordice/core/**/*.{js,mjs}"],
    // other config
}
```

### Run locally

Run the following command:

```sh
git clone https://github.com/rndy28/nordice
cd nordice
yarn install
```

### Useful commands

- `yarn build` - Build all packages including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

#### This design system is bootstrapped by [Turborepo](https://turborepo.org/)
