const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

// // 5 - Implemente a função retrievesFavoriteCards com uma lógica capaz de restaurar o array favoriteCards
const retrievesFavoriteCards = () => {
//   // Exemplo: array.slice(4,1) - remove 1 elemento a partir do índice 4.
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  // 5- Chame a função retrievesFavoriteCards dentro do método afterEach para os testes poderem passar.
  afterEach(() => {
    retrievesFavoriteCards();
  });
  // 1 - Implemente um teste que verifique que após a execução da função saveFavoriteMagicCard, favoriteCards passa a possuir length === 5.
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    // expect(favoriteCards.length).toBe(5);

    // 2 - Dentro do mesmo it, implemente um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".
    const ultimoCard = favoriteCards[favoriteCards.length-1];
    expect(ultimoCard.name).toBe("Beacon of Immortality");

    // 3 - Ainda no mesmo it, chame a função saveFavoriteMagicCard com o argumento "130554" e verifique se favoriteCards passa a possuir length === 6.  
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  // // PARA RODAR OS TESTES DE CIMA, ESSE PRECISA ESTAR COMENTADO
  // // pq o favoriteCard modificou o saveFavoriteMagicCard por causa do API, então o array de 4 itens, passou pra 6.
  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);
    expect(favoriteCards).toHaveLength(4);
  });
});

