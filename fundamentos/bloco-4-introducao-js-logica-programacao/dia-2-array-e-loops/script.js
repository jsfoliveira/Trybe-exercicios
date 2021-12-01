// Atividade 01: Obtenha o valor "Serviços" do array menu
// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// let menuServices = menu[1];

// console.log(menuServices);

// Atividade 02: Procure o índice do valor "Portfólio" do array menu
// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// let indexOfPortfolio = menu[2];

// console.log(indexOfPortfolio);

// Atividade 03: Adicione o valor "Contato" no final do array menu
// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// menu.push("Conteúdo");
// console.log(menu);

//Atividade 04: Utilize o for para imprimir os elementos da lista groceryList com o console.log()
// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
// for (let i = 0; i < groceryList.length; i++) {
//   console.log(groceryList[i]);
// }

//Atividade 05
// let names = ["João", "Maria", "Antônio", "Margarida"];
// for (let nome of names) {
//   console.log(nome);
// }

//EXERCICIO 01: percorra o array imprimindo todos os valores nele contidos com a função console.log()
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//EXERCICIO 02:some todos os valores contidos no array e imprima o resultado
// let numeros = [5, 9, 3, 19, 70];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma = soma + numeros[i];
// }

// console.log(soma);

//EXERCICIO 03: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let numeros = [5, 9, 3, 19, 70];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma = numeros[i] + numeros[i];
// }

// console.log(soma / numeros.length);

//EXERCICIO 04: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".
// let numeros = [5, 9, 3, 19, 70];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma = (numeros[i] + numeros[i]) / numeros.length;
// }
// if (soma > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor ou igual a 20");
// }

//EXERCICIOS 05: Utilizando for , descubra qual o maior valor contido no array e imprima-o
// let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[0] > maiorNumero) {
//     maiorNumero = numero[i];
//   }
// }
// console.log(maiorNumero);

//EXERCICIO 06
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
//definir array
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//definir variavel com os valores impares
// let impar = 0;
//criar o loop
//criar codicional se tiver impar, falar quantos
//se não tiver, colocar "nenhum valor ímpar encontrado"
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     impar = impar + 1;
//   }
// }
// if (impar === 0) {
//   console.log("Nenhum valor ímpar encontrado");
// } else {
//   console.log(impar);
// }

//EXERCICIO BLOCO 04/03
// let n = 5;
// let str = "*";
// for (i = 0; i < n; i++) {
//   console.log(str.repeat(n));
// }
//EXERCICIO 07:Utilizando for , descubra qual o menor valor contido no array e imprima-o
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (menorNumero > numbers[i]) {
    menorNumero = numbers[i];
  }
}
console.log(menorNumero);

//EXERCICIO 08:Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado
//cria variado do array vazio
// let resultado = [];
//cria o loop com o push para empurrar os dados gerados no array para entrar no resultado
// for (let i = 1; i <= 25; i++) {
//   resultado.push(i);
// }
//imprimi o resultado
// console.log(resultado);

//EXERCICIO 09: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
//Criar os dois arrays
// let numeros = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25,
// ];
// let novoArray = [];
//Criar o loop e dentro dele colocar a divisão pro 2 de cada item do array
// for (let i = 0; i < numeros.length; i += 1) {
//   novoArray[i] = numeros[i] / 2;
// }
// console.log(novoArray);
//OUTRA RESOLUÇÃO DO EXERCICIO 09: console.log(numeros.map((x) => x / 2));
