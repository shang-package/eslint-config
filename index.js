module.exports = {
  extends: ["alloy", "alloy/typescript", "plugin:prettier/recommended"],
  plugins: ["prettier"],
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
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always",
        requirePragma: false,
        insertPragma: false,
      },
    ],
    "@typescript-eslint/no-parameter-properties": ["off"],
  },
};
