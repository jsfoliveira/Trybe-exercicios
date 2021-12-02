//??ATIVIDADE DE FIXAÇÃO 01: colocar ola maria, ola joao, ola jorge
// let names = {
//   person1: "João",
//   person2: "Maria",
//   person3: "Jorge",
// };
// for (let key in names) {
//   console.log("Olá," + names[key]);
// }

//ATIVIDADE DE FIXAÇÃO 02: utilize For/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//   model: "A3 Sedan",
//   manufacturer: "Audi",
//   year: 2020,
// };
// for (let key in car) {
//   console.log(key + ":" + car[key]);
// }

//EXERCICIO 01:  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
// console.log("Bem-vinda," + info.personagem);

//EXERCICIO 02:Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console
info.recorrente = "Sim";
console.log(info);

//EXERCICIO 03:Faça um for/in que mostre todas as chaves do objeto
// for (let key in info) {
//   console.log(key);
// }
//EXERCICIO 04:Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto
// for (let value in info) {
//   console.log(info[value]);
// }

//??EXERCICIO 05: defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
console.log(info2);
for (let propriedade in info) {
  if (
    propriedade === "recorrente" &&
    info[propriedade] === "Sim" &&
    info2[propriedade] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  }
}
//EXERCICIO 06: Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"
// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };
// for (let key in leitor) {
// }
// console.log(
//   "O livro favorito de" +
//     " " +
//     leitor["nome"] +
//     " " +
//     leitor["sobrenome"] +
//     " " +
//     "se chama" +
//     " " +
//     leitor.livrosFavoritos[0].titulo
// );
// OBSERVAÇÃO: para não repetir o resultado do console, coloque o console fora do loop

//EXERCICIO 07: Adicione um novo livro favorito na chave livrosFavoritos , que é um array. Atribua a esta chave um objeto contendo as seguintes informações
// leitor.livrosFavoritos.push({
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editor: "Rocco",
// });
// console.log(leitor);

//EXERCICIO 08:Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos"
// for (let key in leitor) {
// }
// console.log(
//   leitor["nome"] +
//     " " +
//     "tem 2 livros favoritos:" +
//     " " +
//     leitor.livrosFavoritos[0].titulo +
//     " " +
//     leitor.livrosFavoritos[1].titulo
// );
