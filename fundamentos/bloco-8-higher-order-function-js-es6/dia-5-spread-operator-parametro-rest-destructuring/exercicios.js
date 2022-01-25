// 01 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54.
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle1, ...rectangle2, rectangle3) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// 02 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...operadores) => operadores.reduce((acc,num) => acc + num);
console.log(sum(2,4));

// 03 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes}.`;
  console.log(personLikes(alex));
  console.log(personLikes(gunnar));

// 04 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
const filterPeople = (objeto) => {
    objeto.forEach((element) => {
    if (element.bornIn >= 2000 && element.nationality === 'Australian'){
        console.log(element);
    }
    });
}
console.log(filterPeople(people)); //dando erro

// 05 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
const myList = [1, 2, 3];
const swap = ([a,b,c]) => [c,b,a];
console.log(swap(myList));

// 06 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const toObject = ([name, brand, year]) => ({ name, brand, year });
console.log(toObject(palio));

// 07 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
// DIFICULDADE PRA BOTAR EM FUNÇÃO
 return ships.forEach((element) => {
    const {name, length} = element;
    console.log(`${name} is ${length}`);
  });

// 08 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (nome, fala = 'Hi') => `${fala}, ${nome}`;
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'

// 09 - Existe um objeto yearSeasons que representam as estações do ano. cada estação é uma chave deste objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
console.log(yearSeasons);
const juntaTudo = [...spring, ...summer, ...autumn, ...winter];
console.log(juntaTudo);