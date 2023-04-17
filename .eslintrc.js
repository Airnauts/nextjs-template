const { resolve } = require('path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended',
    require.resolve('@airnauts/style-guide/eslint/typescript'),
    require.resolve('@airnauts/style-guide/eslint/react-typescript'),
  ],
  parserOptions: {
    project,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
};
