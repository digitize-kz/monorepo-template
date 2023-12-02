/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ["plugin:@next/next/recommended", "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  // https://github.com/vercel/next.js/issues/40687#issuecomment-1421526821
  overrides: [
    {
      // Adapt to your needs (e.g. some might want to only override "next.config.js")
      files: ["*.js"],
      // This is the default parser of ESLint
      parser: "espree",
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  ],
};

module.exports = config;
