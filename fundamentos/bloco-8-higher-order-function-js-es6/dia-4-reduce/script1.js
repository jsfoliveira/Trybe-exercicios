// EXERCICIO 1: SOMAR O ARRAY
// O PARÂMETRO É UMA FUNÇÃO
const collection = [1, 2, 3, 4, 5];

const sumNumbers = collection.reduce((accumulator, number) => accumulator += number);
console.log(sumNumbers); 
// Vai imprimir: 15

// EXERCICIO 2: SOMAR ARRAY USANDO DOIS PARÂMETROS
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers2 = numbers.reduce((result, number) => {
    return result += number;
    }, 10);
console.log(sumNumbers2); // 123

// EXERCICIO 3: SOMAR TODO OS NUMEROS PARES DO ARRAY
// NÃO FUNCIONA
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


// const juntarPares = (element) = element.reduce(numerosPares, 0);
// console.log(juntarPares(numbers));

// EXERCICIO 4: Dada uma matriz, transforme em um array
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), []); // concat vai concatenar
    //OU
    //function flatten() {
    // return arrays.reduce((acumulador, valorAtual) => {
    //     return ([ `${acumulador} ${valorAtual}`])
    // }
  }

  console.log(flatten(arrays));

// EXERCICIO 5
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// EXERCICIO 5: Crie uma string com os nomes de todas as pessoas autoras.
// PRECISA DIFERENCIAR O ÚLTIMO NOME PQ TEM  PRONTO NO FINAL E OS DEMAIS QUE TEM VÍRGUL
function reduceNames(arr) {
  const names = arr.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names;
}
console.log(reduceNames(books));

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge(arr) {
  
}


// 4 - Encontre o livro com o maior nome.
function longestNamedBook(arr) {
const tamanhoNome = books.reduce((acc, element) => {
  if (element.name.length > acc.name.length){
    return element.name;
  } else {
    return acc;
  }
});
return tamanhoNome;
}
console.log(longestNamedBook(books));