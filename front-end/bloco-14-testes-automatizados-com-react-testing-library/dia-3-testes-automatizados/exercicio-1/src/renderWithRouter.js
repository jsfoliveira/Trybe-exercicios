import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
// import { createMemoryHistory} from 'history/createMemoryHistory'

// Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.

// Para usar o renderWIthRouter, não podemos esquecer que devemos colocar o <BrowserRouter /> encapsulando o componente <App /> inteiro.

// Essa função é que ela retorna tanto o componente que passamos como parâmetro, já encapsulado no router, quanto o histórico que geramos, o que também serve para nos levar a outras páginas com facilidade.


const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  console.log(history); // só pra ver o que retorna.
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
  // return { history:customHistory, ...returnFromRender };
};
export default renderWithRouter;