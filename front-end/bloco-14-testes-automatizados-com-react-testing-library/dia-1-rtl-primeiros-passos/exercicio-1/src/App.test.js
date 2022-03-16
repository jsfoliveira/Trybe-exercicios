import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Verifica se existe um input de email', () => {
//   // acessar os elementos da tela
//   render(<AparecerEmail />)
//   const inputEmail = screen.getByLabelText("Email");
//   // fazer os testes
//   expect(inputEmail).toBeTheDocument();
//   expect(inputEmail.type).toBe("email");
// });


// // interagir com os elementos (se necessário)
