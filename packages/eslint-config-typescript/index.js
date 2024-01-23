const fs = require("fs");
const path = require("path");

// Check if tsconfig.json exists and set it on the config if it does
const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : undefined;

module.exports = {
  extends: ["eslint-config-base-alexpagnotta"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: tsConfig,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"], // Force the use of type instead of interface
        // Force the use of type imports
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-empty-function": "warn", // Warn about empty functions
        "@typescript-eslint/no-explicit-any": "warn", // Warn about using the any type
        "@typescript-eslint/no-unnecessary-condition": "warn", // Warn about conditions if not needed
        "@typescript-eslint/no-unnecessary-type-assertion": "warn", // Warn about unnecessary type assertions
        // Warn about unused variables, if not prefixed by an underscore
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            ignoreRestSiblings: true,
            args: "none",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/prefer-as-const": "error", // Force the use of const assertions
      },
    },
  ],
};
