const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[1]); // Olá

// QUESTAO 1
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;
console.log (realizaSaudacao(saudacao)); // Olá

//QUESTAO 2
// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida);
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); 

//QUESTAO 3
// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const par = numerosPares.filter((element) => element % 2 === 0);
console.log(par);


