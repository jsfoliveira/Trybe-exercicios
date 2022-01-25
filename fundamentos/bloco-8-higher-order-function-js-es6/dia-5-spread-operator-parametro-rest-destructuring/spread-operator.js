// MESCLAR ARRAY
const carro = ['gol', 'palio'];
const moto = ['biz', 'r1'];
const veiculos = [...carro, ...moto];
console.log(veiculos) //[‘gol’,’palio’,’biz’,’r1’];

// MESCLAR OBJETO
const conhecimento = {
    softSkills: true,
    hardSkills: true,
}
const pessoa = {
    nome:'Juliana',
    idade: '32',
}
const objeto1 = {
    ...conhecimento,
    ...pessoa,
    esporte: 'corrida',
}
console.log(objeto1);

// NUMERO MAIOR E MENOR
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// ADICIONAR FRUTA NA SALADA DE FRUTA
const specialFruit = ['morango', 'uva', 'melão'];
const additionalItens = ['manga', 'tangerina', 'banana'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));