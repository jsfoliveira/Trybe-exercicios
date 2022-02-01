const soma = () => {
    let resultado = 2 + 1;
    if (resultado === 2){
        callbackSucesso();
    } else {
        callbackError();
    };
}

const callbackSucesso = () => {
    console.log('Parabéns!!');
};

const callbackError = () => {
    console.log('Erro');
};

soma();

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();