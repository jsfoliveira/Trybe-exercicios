const sum = (number1, number2) => {
    return number1 + number2;
}

const multi = (number1, number2) => {
    return number1 * number2;
}

const calculator = (callback, number1, number2) => callback (number1, number2);

console.log(calculator(multi,1,3));