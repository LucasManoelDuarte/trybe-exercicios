const url = 'https://api.coincap.io/v2/assets';

const append = (coin) => {
  coin.forEach((element) => {
    const ol = document.querySelector('ol');
    const li = document.createElement('li');

    let teste2 = parseFloat(element.priceUsd);
    let teste3 = teste2.toFixed(2);

    li.innerHTML = `${element.id} (${element.symbol}): ${teste3}`;
    ol.appendChild(li);
  });
}

const fetchCoin = async () => {
  try {
    const response = await fetch(url);
    const dados = await response.json();
    console.log(dados);
    const { data } = dados;
    const teste = data.filter((e, i) => i <= 9);
    console.log(teste);

    append(teste);
  } catch (error) {
    console.log(error);
  }
}

window.onload = fetchCoin;