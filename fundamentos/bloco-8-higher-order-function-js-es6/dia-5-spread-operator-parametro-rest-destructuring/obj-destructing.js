// EXEMPLO 1
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  // PARA PEGAR O VALOR DA CHAVE NAME, APREDEMOS ASSIM:
  console.log(product.name);
  // MAS PODE USAR O DESTRUCTING
  const {name,seller} = product;
  console.log(name);
  console.log(seller);

// EXEMPLO 2
// definindo o objeto
const character = {
    nome: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      nome: 'Tatooine',
      population: '200000',
    },
  };
  // desestruturando o objeto:
  const { nome, age, homeWorld: { nome: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// EXEMPLO 3
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  const {workDays, weekend} = daysOfWeek;
  console.log(workDays);
  const juntar = [...workDays, ...weekend];
  console.log(juntar);

// EXEMPLO 4: DECLARAR A CHAVE DO OBJETO EM UMA VARIÁVEL
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const { a: nomes, b: classAssigned, c: subject } = student;
  console.log(nomes); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática
  // OU ASSIM:
//   const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };
//   const outroName = student.a;
//   console.log(outroName); // Maria

// EXERCICIO 1
//Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
const user = {
    meuNome: 'Maria',
    idade: 21,
    nationality: 'Brazilian',
  };
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const informacao = {...user, ...jobInfos};
console.log(informacao);

// EXERCICIO 2
// Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
const {meuNome, idade, nationality} = user;
console.log(`Meu nome é ${meuNome}, tenho ${idade} anos e sou ${nationality}`);

// EXERCICIO 3
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