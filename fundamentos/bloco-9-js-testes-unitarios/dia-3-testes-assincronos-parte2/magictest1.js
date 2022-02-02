require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  // 2 - Implemente um teste que verifique se a propriedade name possui valor Ancestor's Chosen.
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async() => {
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen');
  });
  // 3 - Implemente um teste que verifique se getMagicCard é uma função.
  it('Dve verificar se getMagicCard é uma função', async() => {
    expect(typeof getMagicCard).toBe('function');
  });
  // 4 - Implemente um teste que verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada.
  it('Se passar o argumento "130550", o fetch é chamado', async() => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });
  // 5 - Implemente um teste que verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada com o endpoint
  it('Se passar o argumento "130550", o etch foi chamada com o endpoint', async() => {
    const endpoint = "https://api.magicthegathering.io/v1/cards/130550";
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  // 6 - Implemente um teste que verifique se o retorno da função getMagicCard é igual ao objeto card.
  it('Verificar se o retorno da função getMagicCard é igual ao objeto card', async() => {
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  });
  // 7 - Implemente um teste que verifica se, ao chamar a função getMagicCard com o argumento 'idDesconhecido', retorna um erro com a mensagem: "Id is not found!".
  it('Verificar se chamar a função getMagicCard com o argumento idDesconhecido, retorna um erro', async() => {
    const erro = "Id is not found!";
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error(erro));
  })
});
