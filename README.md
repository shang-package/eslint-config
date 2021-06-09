# shang personal eslint config

## `npm install`

```bash
npx install-peerdeps --dev @s4p/eslint-config
```

## config `.eslintrc.js`

```js
module.exports = {
  extends: ["@s4p/eslint-config"],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
  },
  rules: {
    // 自定义你的规则
  },
};
```
