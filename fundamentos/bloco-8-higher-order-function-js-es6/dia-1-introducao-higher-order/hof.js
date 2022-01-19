//High Order Function é uma função que retorna uma outra função ou recebe outra função como parâmetro
// Forma mais longa e sem HOF

const sum1 = (num1, num2) => num1 + num2;
const sub1 = (num1, num2) => num1 - num2;
const multi1 = (num1, num2) => num1 * num2;
const div1 = (num1, num2) => num1 / num2;

console.log(sum1(10,5));
console.log(sub1(10,5));
console.log(multi1(10,5));
console.log(div1(10,5));

// Forma mais curta e com HOF

const sum2 = (num1, num2) => num1 + num2;
const sub2 = (num1, num2) => num1 - num2;
const multi2 = (num1, num2) => num1 * num2;
const div2 = (num1, num2) => num1 / num2;

const calculator = (func) => func(10,5);
console.log(calculator(sum2));
console.log(calculator(sub2));
console.log(calculator(multi2));
console.log(calculator(div2));
