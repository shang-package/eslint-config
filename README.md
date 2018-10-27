# shang personal eslint config

## Typescript rule

### `npm install`

```bash
npm install --save-dev eslint typescript typescript-eslint-parser babel-eslint eslint-plugin-typescript eslint-config-airbnb-base eslint-plugin-import @s4p/eslint-config
```

### config `.eslintrc.js`

```js
module.exports = {
  globals: {},
  extends: ['@s4p/eslint-config'],
  rules: {},
};
```

## standard rule

### `npm install`

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-typescript eslint-config-airbnb-base eslint-plugin-import @s4p/eslint-config
```

### config `.eslintrc.js`

```js
module.exports = {
  globals: {},
  extends: ['@s4p/eslint-config/rule-configs/index'],
  rules: {},
};
```
