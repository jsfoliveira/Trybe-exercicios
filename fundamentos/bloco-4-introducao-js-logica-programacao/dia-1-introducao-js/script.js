//PARTE 1
// const myName = "Juliana";

// const birthCity = "Serrinha";

// var birthYear = 1989;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030;
// console.log(birthYear);

//PARTE 2
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: "Ana",
//   lastName: "Santos",
// };
// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// const patientEmail = "ana@email.com";

// const base = 5;
// var height = 8;
// const area = base * height;
// console.log(area);

// const lado = 10;
// const perimeter = 3 * lado;
// console.log(perimeter);

//PARTE 3
// const nota1 = 80;
// if (nota1 >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// } else if (nota1 < 80 || nota1 == 60) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovada(o)");
// }

//PARTE 4
// const currentHour = 20;
// var message;
// if (currentHour >= 22) {
//   console.log((message = "Não deveríamos comer nada, é hora de dormir"));
// } else if (currentHour >= 18 && currentHour < 22) {
//   console.log((message = "Rango da noite, vamos jantar :D"));
// } else if (currentHour >= 14 && currentHour < 18) {
//   console.log((message = "Hora do almoço!!!"));
// } else if (currentHour < 14 && currentHour >= 11) {
//   console.log((message = "Vamos fazer um bolo pro café da tarde?"));
// } else if (currentHour < 11 && currentHour >= 4) {
//   console.log((message = "Hmmm, cheiro de café recém passado"));
// }
// console.log(message);
// var weekDay = "quarta-feira";
// if (
//   weekDay === "segunda-feira" ||
//   weekDay === "terça-feira" ||
//   weekDay === "quarta-feira" ||
//   weekDay === "quinta-feira" ||
//   weekDay === "sexta-feira"
// ) {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

// console.log(weekDay);

//PARTE 5
// var estadoPessoa = "aprovada";
// switch (estadoPessoa) {
//   case "aprovada":
//     console.log("Aprovada");
//     break;

//   case "lista":
//     console.log("Lista");
//     break;

//   case "reprovada":
//     console.log("Reprovada");
//     break;

//   default:
//     console.log("Não se aplica");
// }

//EXERCÍCIOS
//QUESTÃO 01
// let a = 3;
// let b = 4;
// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;
// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

//QUESTAO 02
// let a = 2;
// let b = 5;
// if (a < b) {
//   console.log(b);
// }

//QUESTAO 03
// let a = 2;
// let b = 5;
// let c = 10;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > c && b > a) {
//   console.log(b);
// } else {
//   console.log(c);
// }

//QUESTAO 04
// let valor = 10;
// if (valor > 0) {
//   console.log("Valor positivo");
// } else if (valor < 0) {
//   console.log("Valor negativo");
// } else {
//   console.log("Valor nulo");
// }

//QUESTAO 05: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//RESOLUÇÃO: A soma dos angulos internos de um triângulo deve ser 180º e os ângulos devem ser positivos.
// let angulo1 = 65;
// let angulo2 = 100;
// let angulo3 = 15;
// let somaAngulos = angulo1 + angulo2 + angulo3;
// let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;
// if (angulosPositivos) {
//   if (somaAngulos === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Erro:ângulo inválido");
// }

//QUESTAO 06: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// var pecaXadrez = "rei";

// switch (pecaXadrez.toLowerCase()) {
//   case "rei":
//     console.log("Move-se para todas as direções");
//     break;
//   case "dama ou rainha":
//     console.log(
//       "Pode mover-se pelas colunas, fileiras e diagonal de outra cor"
//     );
//     break;
//   case "cavalo":
//     console.log("Movimenta-se em L");
//     break;
//   case "torre":
//     console.log("movimenta-se em direção reta pelas colunas ou fileiras");
//     break;
//   case "peão":
//     console.log(
//       "movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal"
//     );
//     break;
//   default:
//     console.log("Erro, peça inválida");
//     break;
// }

//QUESTÃO 07:Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// const nota = 96;
// let a = 90;

// if (nota < 0 || nota > 100) {
//   console.log("Erro, nota incorreta");
// } else if (nota >= a) {
//   console.log(a + "%");
// }

//QUESTAO 08:Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .
// const a = 1;
// const b = 3;
// const c = 5;
// let isEven = false;
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   isEven = true;
// }
// console.log(isEven);

//QUESTAO 09:Escreva um programa que defina três números em constantes no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false
// const a = 1;
// const b = 3;
// const c = 5;
// let impar = false;
// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   impar = true;
// }
// console.log(impar);

//QUESTAO 10
// const valorCusto = 1;
// const valorVenda = 3;

// if (valorCusto >= 0 && valorVenda >= 0) {
//   const valorCustoTotal = valorCusto * 1.2;
//   const total = (valorVenda - valorCustoTotal) * 1000;
//   console.log(total);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// }

//QUESTAO 11
// let aliquotaINSS;
// let aliquotaIR;
// let salario = 2000;

// if (salario <= 1556.94) {
//   console.log((aliquotaINSS = salario * 0.08));
// } else if (salario > 1556.95 && salario < 2594.92) {
//   console.log((aliquotaINSS = salario * 0.09));
// } else if (salario > 2594.92 && salario < 5189.82) {
//   console.log((aliquotaINSS = salario * 0.11));
// } else if (salario > 5189.82) {
//   console.log((aliquotaINSS = salario + 570.88));
// }

// if (salario <= 1903.98) {
//   console.log((aliquotaIR = 0));
// } else if (salario > 1903.98 && salario < 2826.65) {
//   console.log((aliquotaIR = salario * 0.075 - 142.8));
// }

// let salarioliquido = salario - aliquotaINSS - aliquotaIR;
// console.log(salarioliquido);
