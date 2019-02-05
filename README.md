# shang personal eslint config

## Typescript rule

### ts `npm install`

```bash
npm install --save-dev eslint typescript eslint-config-airbnb-base eslint-plugin-import @s4p/eslint-config @typescript-eslint/eslint-plugin
```

### ts config `.eslintrc.js`

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
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import @s4p/eslint-config
```

### config `.eslintrc.js`

```js
module.exports = {
  globals: {},
  extends: ['@s4p/eslint-config/rule-configs/index'],
  rules: {},
};
```
