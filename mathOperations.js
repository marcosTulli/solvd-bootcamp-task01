const strings = require('./strings.js');
const utils = require('./utils.js');

const String = {
  plus: (num1, num2) => {
    const input = [num1, num2];
    const isvalidinput = utils.handleInputValidation(input);
    if (isvalidinput && input.length === 2) {
      const sum = input.map((i) => parseInt(i)).reduce((a, b) => a + b);
      return sum.toString();
    } else {
      return strings.errorAll;
    }
  },
  minus: (num1, num2) => {
    const input = [num1, num2];
    const firstParamIsLarger = input.map((i) => parseInt(i)).reduce((a, b) => a - b > 0);
    const isValidInput = utils.handleInputValidation(input) && firstParamIsLarger;
    if (isValidInput) {
      const rest = input.map((i) => parseInt(i)).reduce((a, b) => a - b);
      return rest.toString();
    } else {
      return `${strings.errorAll}\n${strings.errorMinus}`;
    }
  },
  divide: (num1, num2) => {
    const input = [num1, num2];
    const isValidInput = utils.handleInputValidation(input);
    if (isValidInput) {
      const division = input.map((i) => parseInt(i)).reduce((a, b) => a / b);
      return Math.ceil(division).toString();
    } else {
      return strings.errorAll;
    }
  },
  multiply: (num1, num2) => {
    const input = [num1, num2];
    const isvalidinput = utils.handleInputValidation(input);
    if (isvalidinput) {
      const multiplication = input.map((i) => parseInt(i)).reduce((a, b) => a * b);
      return multiplication.toString();
    } else {
      return strings.errorAll;
    }
  },
};

module.exports = String;
