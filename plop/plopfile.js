const airContextGenerator = require('./air-context.generator');
const contextGenerator = require('./context.generator');
const componentGenerator = require('./component.generator');

module.exports = function Plopfile(plop) {
  componentGenerator(plop);
  airContextGenerator(plop);
  contextGenerator(plop);
};
