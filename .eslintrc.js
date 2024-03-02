const { resolve } = require('path');
const project = resolve(__dirname, 'tsconfig.json');
const rules = {
  'prettier/prettier': 'warn',
  'no-unused-vars': 'error',
  'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
};

module.exports = {
  root: true,
  plugins: ['@stylistic/jsx', 'prettier'],
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    project,
    ecmaVersion: 'latest',
  },
  settings: {
    next: {
      rootDir: 'src',
    },
  },
  env: {
    es6: true,
  },
  rules,
};
