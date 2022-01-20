// EXERCICIO 1
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

  const verificar = () => {
      // PODE FAZER NO LUGAR DO FOR UM forEach:
      // students.forEach((student, index) => {
    //     if (student.grade >= 60) {
    //         students[index].approved = 'Aprovado';
    //       } else {
    //         students[index].approved = 'Recuperação';
    //       }
    //     });
    //   })
      for (let index =0; index < students.length; index += 1){
/* DÚVIDA: pq nesse caso não psoso fazer um return no if */
        const student = students[index];
        if (student.grade >= 60){
            student.approved = 'Aprovado';
        } else {
            student.approved = 'Reprovado';
        };
      };
  };
  verificar();
  console.log(students);

// EXERCICIO 2
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const encontrarMultiplo5 = numbers.find((number) => {
    return number % 5 === 0
})
console.log(encontrarMultiplo5);

// EXERCICIO 3
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((i) => console.log('Cada elemento do array:', i));

// EXERCICIO 4
 const numeros = [1,2,3,4];
 numeros.forEach((elemento) => {
     if (elemento % 2 === 0){
         console.log(`O ${elemento} é divisível por 2`);
     }
 });

 // EXERCICIO 5
 const arrayOfValues2 = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues2.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// EXERCICIO 6: TABUADA DE 2 (PRIMEIRA FORMA)
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const tabuada = (array) => {
//     const newArray = [];
//     for (let index = 0; index < array.length; index += 1){
//         const multi = array [index] * 2;
//         newArray.push(multi);
//     }
//     return newArray;
// }
// console.log(tabuada(numbers2));
// EXERCICIO 6: TABUADA DE 2 (SEGUNDA FORMA)
const tabuada = (array) => {
    const newArray = [];
    array.forEach((element) => {
        const item = element * 3;
        newArray.push(item);
    })
    return newArray;
}
console.log(tabuada(numbers2));

// EXERCICIO 7: colocar em caixa alta os elementos do array
// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

