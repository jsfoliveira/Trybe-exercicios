import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {

  // ao invés do global chamar a função fetch que tem a promisse, ele vai chamar a função simulada. Quando a promisse é resolvda, ela retorna um objeto que tem a propriedade json, propriedade essa que quando é chamada retorna uma promisse resolvida, que retorna uma piada joke. Coloca dentro de chaves uma parte do objeto da piada.
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    }),
  }));


  render(<App />);
  // Encontrar um texto. Como é um async/await, usa find, e não get.
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
