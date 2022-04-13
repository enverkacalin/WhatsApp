module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: false, parser: "flow", bracketSameLine: true, printWidth: 100 },
    ],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "linebreak-style": [0],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": [0],
    "no-undef": [0],
  },
};
