const person = {
    name:'Juliana',
    lastName: 'Oliveira',
//greet: é uma propriedade do objeto, uma chave, por isso que tem dois pontos.
    greet: function (name, greentingFunction){
        const greenting = greentingFunction(name);
        return greenting;
    }
};

const love = (name) => `olá ${name},pessoa linda`;
const bad = () => 'olá,não tomei café';

console.log(person.greet('noel', love));
//o love está definindo um parâmetro name, no bad nao. se for verificar o bad, precisa retirar todos os name.