module.exports = {
  'src/**/*.{js,ts,tsx}': () => ['tsc --noEmit', 'eslint'],
  'src/**/*.{css,scss,less}': () => 'stylelint',
};
