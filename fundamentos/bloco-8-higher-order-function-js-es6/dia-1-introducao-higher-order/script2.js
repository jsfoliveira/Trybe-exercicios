// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// RESOLUÇÃO: preciso criar a função que é o parâmetro da função principal, que deverá ter a criação do email, com base no fullName. Para fazer um email usando o fullName, eu preciso deixar todas as letras em minúsculo (tolLowerCase()), preciso separar cada palavra em item de array (split(' ')) e juntar cada item do array devendo ter um _ entre cada item (join('_'))
// split fica sssim: id3: [ 'carla', 'paiva' ]
// FUNÇÃO PRINCIPAL
const newEmployees = (formulario) => {
    const employees = {
      id1: formulario('Pedro Guerra'),
      id2: formulario('Luiza Drumond'), 
      id3: formulario('Carla Paiva'),
    }
    return employees;
  };
// FUNÇÃO SECUNDÁRIA
const formulario = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    fullName, 
    email:`${email}@betrybe.com`};
}
// IMPRIMIR A FUNÇÃO SECUNDÁRIA DENTRO DA PRINCIPAL
console.log(newEmployees(formulario));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// Math.random() gera números aleatórios entre 0 e 1(será 0 até > que 1, ou seja, 0.9999)
// Se multiplicar esse Math.random por um número, esse número será o máximo gerado, exemplo:
// Math.random()*5 -> ele vai gerar número de 0 até 4.999
// Para eliminar as casas decimais: Math.floor(Math.random())
// Para gerar número de 1 a 4:
// const number = Math.floor((Math.random() * 5)
// Para gerar número de 1 a 5. O + 1 adiciona o 5:
// const number = Math.floor((Math.random() * 5) + 1);
// console.log(number);
const numerochecado = (numeroApostado, numeroSorteado) => {
  return numeroApostado === numeroSorteado
}
const sorteio = (numeroApostado, callback) =>  {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);
  if (callback(numeroSorteado, numeroApostado)){
      return "Parabéns você ganhou";
  } else {
      return "Tente novamente";
  }
};
console.log(sorteio(2,numerochecado));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. 
//Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));














// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const valorQuestao = (gabarito, resposta) => {
//   if (gabarito === resposta){
//     return 1;
//   } else if (resposta === 'N.A'){
//     return 0;
//   } else {
//     return -0.5;
//   }
// }
// const contarPontos = (gabarito, resposta, action) => {
//   let contador = 0;
//   for (let index = 0; index < gabarito.length; index += 1){
//     const actionReturn = action(gabarito[index], resposta[index]);
//     contador += actionReturn;
    
//   }
//   return `Resultado final: ${contador} pontos`;
// }

// console.log(contarPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, valorQuestao));