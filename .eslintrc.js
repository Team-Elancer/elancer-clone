module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  parser: "babel-eslint",
  parserOptions: { "ecmaVersion": 6, "sourceType": "module", "ecmaFeatures": { "modules": true } },
  plugins: ['react',"prefer-arrow"],
  rules: {
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ],
    "prefer-arrow-callback": [
      "error",
      { "allowNamedFunctions": true }
    ],
    "func-style": [
      "error",
      "expression",
      { "allowArrowFunctions": true }
    ],
    "react/function-component-definition": [ 2, { namedComponents: "arrow-function", unnamedComponents: "arrow-function", }, ],
    'no-shadow': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': [1, { singleQuote: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};