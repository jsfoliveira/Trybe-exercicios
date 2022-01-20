// EXERCICIO 1
const listaAprovados = [
    'jose@gmail.com',
    'joaquim@gmail.com',
    'joarez@gmail.com',
    'joao@gmail.com',
];

const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
};

const listadeEmails = listaAprovados.map((email) => {
    return {email: email, nota: 10};
});

console.log(listadeEmails);

listadeEmails.forEach((objetoEmail) => enviarEmail (objetoEmail));

console.log();

// EXERCICIO 2
const numbers = [1, 2, 3, 4, -5];
//SE O RETORNO DO MAP ESTÁ EM UMA LINHA, NAO PRECISA DA PALAVRA RETURN E {}
const numeroNegativo = numbers.map((element) => (element > 0)? element * -1 : element);
console.log(numeroNegativo);

// EXERCICIO 3: UNIR OS DOIS ARRAY (PRODUCT E PRICES).
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
console.log({produto: products[0], preço: prices[0]});

const juntarArray = (listaProduto, listaPreco) => listaProduto.map((produto, index) => ({ [produto]: listaPreco[index]}
));

console.log(juntarArray(products, prices));

//EXERCICIO 4
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

  const buscarEstudanteManha = estudantes.filter((element) => element.turno === 'Manhã');
  console.log(buscarEstudanteManha);

  const arrayEstudanteManha = buscarEstudanteManha.map((element) => `${element.nome} ${element.sobrenome}`);
  console.log(arrayEstudanteManha);
