module.exports = {
  env: {
    browser: true,
    es6: true,
    node: 1
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "func-names": 0,
    "no-irregular-whitespace": 2,
    "no-param-reassign": ["error", { props: false }],
    "no-multi-spaces": 2,
    "no-lonely-if": 0,
    "no-plusplus": 0,
    "block-spacing": ["error", "always"],
    "no-mixed-spaces-and-tabs": 2,
    "jsx-quotes": [2, "prefer-single"],
    "comma-spacing": ["error", { before: false, after: true }],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "comma-dangle": ["error", { functions: "never" }],
    "max-len": ["error", { code: 120, ignoreUrls: true }],
    "indent": ["error", 4],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0
  }
};
