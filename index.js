const String = require('./mathOperations');

const realNumber1 = '5';
const realNumber2 = '3';
const realNumber3 = '12345';
const realNumber4 = '123';
const bigInt1 = '9999999999999999999999999999999999999999999999999999999999';
const bigInt2 = '100000000000000000000000';
const bigInt3 = '1000000000000000000000';
const falseNumber1 = 'baz';
const falseNumber2 = NaN;

const plus = String.plus(bigInt1, realNumber2);
const minus = String.minus(bigInt1, realNumber2);
const divide = String.divide(bigInt3, bigInt2);
const multiply = String.multiply(bigInt1, bigInt2);

console.log(`Sum: ${plus}`);
console.log(`Substraction: ${minus}`);
console.log(`Division: ${divide}`);
console.log(`Multiplication: ${multiply}`);
