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
// const a = 10;
// const b = 5;
// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// //QUESTÃO 02
// const a = 20;
// const b = 21;
// if (a > b) {
//   console.log("'a' é maior que 'b'");
// } else {
//   console.log("'b' é maior que 'a'");
// }

//QUESTÃO 03
// const a = 6;
// const b = 4;
// const c = 2;

// if (a > b && a > c) {
//   console.log('O maior número é: ' + a + ' (a)');
// } else if (b > a && b > c) {
//   console.log('O maior número é: ' + b + ' (b)');
// } else {
//   console.log('O maior número é: ' + c + ' (c)');
// };

//QUESTÃO 04
// const number = 4;

// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// // QUESTAO 05

// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives =
//   degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if (allAnglesArePositives) {
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Erro: ângulo inválido");
// }

// //QUESTAO 06
// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

//QUESTAO 07

//QESTAO 08

//QUESTAO 09

//QUESTAO 10

//QUESTAO 11
