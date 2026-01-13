// Front-end/eslint.config.js
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 18+
      "no-unused-vars": "warn",
    },
  },
];
