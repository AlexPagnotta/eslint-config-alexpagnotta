# Alex Pagnotta's Eslint Typescript Config

Eslint configuration for all my personal projects based on typescript.

### Installation

To install it on your project, you can simply run `npm install --save-dev eslint-config-typescript-alexpagnotta`.
Once installed you can just import it in your `.eslintrc.js` file:

```js
module.exports = {
  extends: ["@alexpagnotta/eslint-config-typescript"],
  ...
};
```

#### Typescript config

If your typescript config is not in the root of your project, you can specify the path in the `.eslintrc.js` file:

```js
module.exports = {
  ...
  parserOptions: {
    project: "./path/to/tsconfig.json",
  },
  ...
};
```
