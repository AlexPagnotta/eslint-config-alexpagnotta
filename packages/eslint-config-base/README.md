# Alex Pagnotta's Eslint Base Config

Base Eslint configuration for all my personal projects, used as a base for all the other configurations, but can be also used standalone for specific projects.

### Installation

To install it on your project, you can simply run `npm install --save-dev @alexpagnotta/eslint-config-base-alexpagnotta`.
Once installed you can just import it in your `.eslintrc.js` file:

```js
module.exports = {
  extends: ["@alexpagnotta/eslint-config-base"],
  ...
};
```
