// module.exports = {
//   root: true,
//   extends: [
//     'plugin:vue/essential',
//     'plugin:prettier/recommended',
//     'eslint:recommended',
//   ],
// };

module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
