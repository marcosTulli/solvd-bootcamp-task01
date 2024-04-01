const String = require('./mathOperations');

const realNumber1 = '5';
const realNumber2 = '3';
const falseNumber1 = 'baz';
const falseNumber2 = NaN;

const plus = String.plus(falseNumber1, realNumber2);
const minus = String.minus(realNumber1, realNumber2);
const divide = String.divide(realNumber1, realNumber2);
const multiply = String.multiply(realNumber1, falseNumber2);

console.log(`Sum: ${plus}`);
console.log(`Substraction: ${minus}`);
console.log(`Division: ${divide}`);
console.log(`Multiplication: ${multiply}`);
