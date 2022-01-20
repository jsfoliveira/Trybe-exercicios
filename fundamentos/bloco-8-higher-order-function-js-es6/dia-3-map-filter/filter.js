// EXERCICIO 1: FILTRAR QUEM TEVE NOTA MAIOR OU IGUAL A 100.
const listaAprovados = [
    {nome:'José', email:'jose@gmail.com', nota:50},
    {nome:'Joaquim', email:'joaquim@gmail.com', nota:150},
    {nome:'Joarez', email:'joarez@gmail.com', nota:250},
    {nome:'João', email:'joao@gmail.com', nota:80},
];
const pessoaFiltrada = listaAprovados.filter((item) => item.nota >= 100);
console.log(pessoaFiltrada);

// EXERCICIO 2: FILTRA MÚLTIPLOS DE 2.
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = numbers.filter((number) => number % 2 === 0);
console.log(verifyEven);

// EXERCICIO 3: FILTRAR QUEM NÃO PODE DIRIGIR.
// NÃO PRECISA DE FUNÇÃO, PODE SER FEITO COM UMA VARIÁVEL DIRETO.
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
const naoDirigir = objPeople.filter((pessoa) => pessoa.age < 18);
console.log(naoDirigir);

// EXERCICIO 4: retornar o array sem Ricardo.
// PRECISA FAZER UMA FUNÇÃO PRA DIZER O NOME QUE QUER TIRAR. FAZ COM OS PARÊNTES E DEPOIS PRECISA TIRAR
// name é o elemento e listaStudents é o novo array
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const tirarNome = (name, array) => array.filter((pessoa) => pessoa !== name)

