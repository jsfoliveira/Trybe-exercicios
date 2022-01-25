// EXERCICIO 1
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting();

//EXERCICIO 2
const multiply = (number, value = 2) => {
    return number * value;
  };
console.log(multiply(8));