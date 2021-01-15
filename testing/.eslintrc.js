/**
 * ESLint Configuration
 */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // prettierと重複するルールを無効化
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  env: { browser: true, node: true, es6: true },
  rules: {
    // custom
    "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
  },
};
