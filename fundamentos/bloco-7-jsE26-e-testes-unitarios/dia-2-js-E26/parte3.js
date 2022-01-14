const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.


const addTurnoNoite = (objeto, chave, valor ) => {
    objeto[chave] = valor;
}
console.log(addTurnoNoite(lesson2,'turno', 'noite'));
console.log(lesson2)

//2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listarKey = objeto => {
    return Object.keys(objeto);
}
console.log(listarKey(lesson2));

//3. Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = objeto => {
    return Object.keys(objeto).length;
}
console.log(tamanhoObjeto(lesson2));

//4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valoresObjeto = objeto => {
    return Object.values(objeto);
}
console.log(valoresObjeto(lesson2));

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = {};
Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);



//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

//7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

//8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: