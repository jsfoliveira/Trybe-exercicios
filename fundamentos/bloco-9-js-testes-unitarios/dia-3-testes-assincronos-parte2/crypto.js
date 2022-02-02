// Criei a variável para armazenar a URL.
const fetchCoins = () => { //async antecede o parâmetro da função
    const url = 'https://api.coincap.io/v2/assets';
  
    fetch(url) // await antecede o promesse
      .then((response) => response.json()) // response recebe o valor do objeto retornado do fetch(url). O .json vai converter o response em dado JSON.
      .then((data) => setCoins(data.data)) // O dado JSON precisa ser ainda processando. O data vai fazer isso.
      .catch((error) => console.log(error.toString())); // é o reject.
  }
 
  // função para criar os li
  const setCoins = (data) => {
    const coinsList = document.getElementById('coins-list');
  // Porque coins.forEach
    data.forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    });
  }
  
  window.onload = () => fetchCoins();
