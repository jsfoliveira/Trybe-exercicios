// QUANTAS VEZES TEM RONALDO.
const jogador = ['Adriano','Ronaldo', 'Romário', 'Ronaldo']

const temp = jogador.reduce((acumulador, valorAtual) => {
    if (Object.keys(acumulador).includes(valorAtual)){
        acumulador[valorAtual] += 1
    } else {
        acumulador[valorAtual] = 1
    }
    return acumulador
}, {});

console.log(temp);
// const quantosadriano = jogador.filter((element) => element === 'Adriano');
// const tamanho1 = quantosadriano.length;

// const quantosronaldo = jogador.filter((element) => element === 'Ronaldo');
// const tamanho2 = quantosronaldo.length;

// const quantosromario = jogador.filter((element) => element === 'Romário');
// const tamanho3 = quantosromario.length;
// console.log(tamanho1);
// console.log(tamanho2);
// console.log(tamanho3);
// const frase = `Adriano: ${tamanho1} Ronaldo: ${tamanho2} Romário: ${tamanho3}`
// console.log(frase);
// const array = frase.split(' ');
// console.log(array);
 
// const criandoObjeto = Object.assign({}, array);
// console.log(criandoObjeto);

// const mudar = criandoObjeto['0'] = 'jogador';
// console.log(criandoObjeto);