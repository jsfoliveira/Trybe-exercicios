// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const acorde = () => 'Acordando!!';
console.log(acorde());
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const retorneString = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const outraString = () => 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 
/* RESOLUÇÃO: O parâmetro é conjunto de função, esse conjunto precisa estar em uma variável. Para imprimir no console o conjunto de função, eu preciso chamar cada uma. */ 
const doingThings = (func) => {
    const funcaoVariavel = func();
    console.log(funcaoVariavel);
}

doingThings(acorde);
doingThings(retorneString);
doingThings(outraString);