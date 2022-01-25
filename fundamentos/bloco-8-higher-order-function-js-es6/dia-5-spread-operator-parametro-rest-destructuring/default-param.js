// EXERCICIO 1
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting();

//EXERCICIO 2
const multiply = (number, value = 2) => {
    return number * value;
  };
console.log(multiply(8));

// EXERCICIO 03
const greet = (nome, fala = 'Hi') => `${fala}, ${nome}`;
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
