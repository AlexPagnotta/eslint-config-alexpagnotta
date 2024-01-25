module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-typescript-alexpagnotta",
  ],
  plugins: ["react", "jsx-a11y"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off", // Disable as we are not using prop-types
    "react/react-in-jsx-scope": "off", // No need to have react in scope anymore
    "react/self-closing-comp": "error", // Enforce self-closing tags

    // Warn about missing alt attribute on img elements
    "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
    "jsx-a11y/aria-props": "warn", // Warn about invalid aria-* props
    "jsx-a11y/aria-proptypes": "warn", // Warn about invalid aria-* props values
    "jsx-a11y/aria-unsupported-elements": "warn", // Warn about aria-* props assigned to non supported elements
    "jsx-a11y/click-events-have-key-events": "warn", // Warn about click events not accompanied by keyboard events
    "jsx-a11y/no-noninteractive-element-interactions": "warn", // Warn about non-interactive elements with event handlers
    "jsx-a11y/no-static-element-interactions": "warn", // Force a role static elements when an event handler is present
    "jsx-a11y/role-has-required-aria-props": "warn", // Warn about missing aria-* props for a given role
    "jsx-a11y/role-supports-aria-props": "warn", // Warn about invalid aria-* props for a given role
  },
};
