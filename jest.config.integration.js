var config = require('./jest.config');

config.testRegex = '(/__tests__/.*|(\\.|/)(itest|ispec))\\.(jsx?|tsx?)$';
module.exports = config;
