//  Verificar se o número é par
// const numbersPar = [19, 21, 30, 3, 45, 22, 15];
//  const verificarPar = (number2) => number2 % 2 === 0;
//  const ePar = numbersPar.find(verificarPar);
//  console.log(ePar);
//OU DESSA FORMA
// const numbersPar = [19, 21, 30, 3, 45, 22, 15];
// const ePar = numbersPar.find((verificarNumero) => {
//     return verificarNumero % 2 === 0
// });
// console.log(ePar);

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}
console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find((cincoLetras) => cincoLetras.length === 5);
}
console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id = '31031685');
  }

  console.log(findMusic('31031685'));
