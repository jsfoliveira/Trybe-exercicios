const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

// 5 - Implemente a função retrievesFavoriteCards com uma lógica capaz de restaurar o array favoriteCards
const retrievesFavoriteCards = () => {
  // Exemplo: array.slice(4,1) - remove 1 elemento a partir do índice 4.
  // GABARITO
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  // 5- Chame a função retrievesFavoriteCards dentro do método afterEach para os testes poderem passar.
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    await saveFavoriteMagicCard('130553');

  });
  // 1 - Implemente um teste que verifique que após a execução da função saveFavoriteMagicCard, favoriteCards passa a possuir length === 5.
  it('Verificar se execução da função saveFavoriteMagicCard, favoriteCards passa a possuir length === 5', async () => {
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);

    // 2 - Dentro do mesmo it, implemente um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".
    // NÃO CONSIGO FAZER
    //PQ ESSE NÚMERO '130553'?
    await saveFavoriteMagicCard('130553');
    const ultimoCard = favoriteCards.length-1;
    expect(ultimoCard.name).toEqual("Beacon of Immortality");

    // 3 - Ainda no mesmo it, chame a função saveFavoriteMagicCard com o argumento "130554" e verifique se favoriteCards passa a possuir length === 6.  
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(6);
  });
 
  // PARA RODAR OS TESTES DE CIMA, ESSE PRECISA ESTAR COMENTADO
  // pq o favoriteCard modificou o saveFavoriteMagicCard por causa do API, então o array de 4 itens, passou pra 6.
  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions();
    expect(favoriteCards).toHaveLength(4);
  });
});
