/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    $t: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-async-promise-executor": "off",
    "vue/no-mutating-props": 0,
    "vue/multi-word-component-names": 0,
  },
  ignorePatterns: ["*/assets/*", "components.d.ts"],
};
