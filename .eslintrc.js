// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = require('path').resolve;
const project = resolve(__dirname, 'tsconfig.json');
const rules = {
  'prettier/prettier': 'warn',
  '@typescript-eslint/no-unused-vars': 'error',
  'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@stylistic/jsx', '@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    project,
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
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
