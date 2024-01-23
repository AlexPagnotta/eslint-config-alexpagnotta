module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier", "import"],
  env: {
    browser: true,
    commonjs: true,
    es6: true, // This is only for global vars, not for syntax, so es6 is a good target, new versions could contain features that requires polyfills
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest", // This is for syntax, we use latest cause we will transpile to older versions anyway
    sourceType: "module",
  },
  rules: {
    "no-undef": "error", // Disallow undefined variables, if not defined in global scope
    "no-var": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }], // Warn about console.log left in code during debug/development
    "prefer-const": "error",
    "spaced-comment": "error", // Add space at the beginning of comments

    "import/no-default-export": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "always", // Add new line between groups
        groups: [
          "builtin", // Node.js builtins
          "external", // Third-party libraries (npm)
          "internal", // Internal modules (~/)
          "parent", // Parent directories (../)
          "sibling", // Sibling directories (./bar/baz)
          "index", // "index" of the current directory (./)
        ],
        // Define the paths to be considered as internal
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
          {
            pattern: "/**",
            group: "internal",
            position: "before",
          },
        ],
        // Sort the imports alphabetically
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
