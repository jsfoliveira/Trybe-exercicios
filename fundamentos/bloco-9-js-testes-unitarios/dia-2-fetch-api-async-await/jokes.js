const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const obj = { //formato aceito da resposta no site usado
      method: 'GET',
      headers: {'Accept': 'application/json'} 
  };
  fetch(API_URL, obj)
    .then(response => response.json) // O parâmetro resp recebe o valor do objeto retornado de fetch(url). Use o método json() para converter resp em dados JSON
    .then(data => console.log(data)); // Os dados JSON ainda precisam ser processados. Adicione outra instrução then() com uma função que tem um argumento chamado data
};

window.onload = () => fetchJoke();