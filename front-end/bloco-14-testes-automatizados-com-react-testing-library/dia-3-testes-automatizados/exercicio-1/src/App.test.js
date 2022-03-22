import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { Home } from './App'; // como importar outros componentes.


describe('teste da aplicação toda', () => {
it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);
  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início', level:1   // level 1 porque é h1
  });
  expect(homeTitle).toBeInTheDocument();
});

it('Ao clicar no link Sobre, deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'Sobre'});
  // verificar se tem um link no documento. toBeDefined é a mesma coisa que toBeInTheDocument.
  expect(aboutLink).toBeInTheDocument();
  // verificar se é possível clicar no link.
  userEvent.click(aboutLink);
  // o history.location.pathname para verificar se estamos na página correta
  const {pathname} = history.location;
  expect(pathname).toBe('/about');

  // checamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
  const aboutTitle = screen.getByRole('heading', {name: 'Você está na página Sobre'});
  expect(aboutTitle).toBeInTheDocument();
});

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  // extrai o history
  const { history } = renderWithRouter(<App />);
  // push redireciona para alguma pasta.
  history.push('/pagina/que-nao-existe/');
  // quando me redirecionar, eu vou esperar um h1 com o texto abaixo.
  const notFoundTitle = screen.getByRole('heading', {name: 'Página não encontrada', level: 1});
  expect(notFoundTitle).toBeInTheDocument();
});

it('verifica a página Home', () => {
  renderWithRouter(<Home />);
  const home = screen.getByRole('heading', {
    name: 'Você está na página Início', level:1   // level 1 porque é h1
  });
  expect(home).toBeInTheDocument();
});
});