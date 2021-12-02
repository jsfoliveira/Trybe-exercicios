//ATIVIDADE SOBRE FUNÇÕES
//??QUESTAO 01:crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// function verificaPalindromo ( ){

// }
//QUESTAO 02:Crie uma função que receba um array de inteiros e retorne o índice do maior valor
function retornarIndiceMaiorValor(array) {
  let indiceMaiorValor = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > array[indiceMaiorValor]) {
      //   console.log(i);
      indiceMaiorValor = i;
    }
  }
  return indiceMaiorValor;
}
let teste = [2, 3, 25, 6, 7, 10, 1];
console.log(retornarIndiceMaiorValor(teste));

//maiorValor = 2
//2>3 2>1
//QUESTAO 05:Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete

//QUESTAO 06:Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N (N=5)
// function somaNumerosInteiros(n) {
//   let soma = 0;

//   for (let i = 1; i <= n; i += 1) {
//     soma = soma + i;
//   }
//   return soma;
// }
// console.log(somaNumerosInteiros(5));
