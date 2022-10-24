module.exports = {
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  // extends: ["plugin:vue/base"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error',
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
  },
};
