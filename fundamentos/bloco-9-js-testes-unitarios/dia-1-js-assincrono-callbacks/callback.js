// EXERCICIO 1
// Soma SEM callback:
const soma = (num1, num2) => {
    return num1 + num2;
};
console.log(soma(4,6));
// Soma COM callback: EXEMPLO SEM OS VALORES NA FUNÇÃO
const somar = (num1, num2, callback) => { //1º coloca o callback como parametro, o problema que quer resolver e chama o callback
    let sum = num1 + num2; // Daria no mesmo se tirasse o callback
    callback(sum);
};
const resultado = (resultado) => { // 2º o que quero imprimir
    console.log(resultado);
};
somar (4,8, resultado);

// EXERCICIO 2: EXEMPLO COM OS VALORES NA FUNÇÃO
const getUser = (callback) => {
    const userToReturn = {
        firstName: 'Juliana',
        lastName: 'Oliveira'
    };
    return callback(userToReturn);
}
const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);

getUser(userFullName);
