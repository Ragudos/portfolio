module.exports = {
  env: {
    es2020: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:astro/recommended",
    "eslint-plugin-jsx-a11y",
    "eslint-configuration-standard-with-typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        "astro/no-set-html-directive": "error",
        "astro/no-deprecated-astro-canonicalurl": "error",
        "astro/no-set-html-directive": "error",
        "astro/no-set-text-directive": "error",
        "astro/no-unused-css-selector": "warn",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/jsx-a11y/anchor-has-content": "error",
        "astro/jsx-a11y/alt-text": "error",
        "astro/jsx-a11y/anchor-ambiguous-text": "error",
        "astro/jsx-a11y/aria-unsupported-elements": "error",
        "astro/jsx-a11y/anchor-is-valid": "error"
      },
    },
    // ...
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    semi: "error",
    curly: ["error", "all"],
    "arrow-body-style": ["error", "as-needed"],
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
      },
    ],
    "space-before-blocks": ["error", "always"],
    /** @see https://eslint.org/docs/latest/rules/padding-line-between-statements#rule-details */
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: ["case", "default"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "if",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "rest-spread-spacing": ["error", "never"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
};
