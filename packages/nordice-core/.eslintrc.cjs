module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-unknown-property": "off",
    "react/jsx-key": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    quotes: ["error", "double"],
  },
};
