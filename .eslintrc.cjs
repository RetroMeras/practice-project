module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
  ],
  // extends: ["plugin:vue/base"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
