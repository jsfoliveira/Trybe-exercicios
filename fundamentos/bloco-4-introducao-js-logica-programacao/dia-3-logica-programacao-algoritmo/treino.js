//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
// let n = 5; // numero de colunas e linhas
// let str = "*"; // o que vai conter na celula
// for (let i = 0; i < n; i += 1) {
// o loop pra repetir na linha
// let strImprimir = str.repeat(n); // construir as colunas
// console.log(strImprimir); // imprimir o conteúdo
// }

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
// let n = 5;
// let str = "*";
// let m = n - 4;
// for (let i = 0; i < n; i += 1) {
//   let strImprimir = str.repeat(m);

//   console.log(strImprimir);
//   m = m + 1;
// }

//Agora inverta o lado do triângulo
let n = 5;
let m = n - 4;
let str1 = "*";
let str2 = " ";
for (let i = 0; i < n; i += 1) {
  let strImprimir = str2.repeat(n - m) + str1.repeat(m);
  console.log(strImprimir);
}
5- 4 = 1
1 +1 = 2
2 + 1 =3
3 + 1 =4
4 + 1 = 5

// let n = 5;
// let m = n - 4;
// let str1 = "*";
// let str2 = " ";
// for (i = 0; i < n; i++) {
//   console.log(str2.repeat(n - m) + str1.repeat(m));
//   m = m + 1;
// }
