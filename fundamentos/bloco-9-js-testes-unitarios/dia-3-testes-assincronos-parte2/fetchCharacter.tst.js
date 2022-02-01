require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  // it('descrição do que está sendo testado', função anônima). Para testar uma função assíncrona, precisa botar antes da função o async e o await quando chamar a função.
  // describe serve para organizar os testes, serve para descrever o está sendo feito.
  // it('', () => {});
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    console.log(character);
    expect(character.name).toBe('Wonder Woman'); //Para testar se não é um falso negativo, teste com outro nome tb.
  });
  it('Verificar se retorna um erro quando a função não tiver parâmetro', async () => {
    const semparam = await fetchCharacter();
    console.log(semparam);
    expect(semparam).toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
  });
// é necessário testar a chamada da função e se a url recebida é a correta. Para isso, é preciso executar a função fetchCharacter , mas nesse caso, é necessário 'esperar' que a função fetch seja chamada 4 vezes (PQ AQUI TEM 4 TESTES) e também se é executada com o parâmetro correto.
// Os 3 primeiros testes conferiram o resultado da requisição, no último teste, foi verificado, de fato, a implementação da função que executa a requisição, ou seja, testar se fetch foi chamada 4 vezes (executamos a função uma vez para cada teste realizado) e verificar se, no último teste, foi chamada com a url correta para buscar os dados na API.
  it('Verifica se fetch é chamada com a url correta'), async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  };
});