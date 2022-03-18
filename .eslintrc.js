module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": [1, { singleQuote: true }],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-undef": "on",
  },
};
