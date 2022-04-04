// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const jokes = document.getElementById('jokeContainer');
      const newJoke = document.createElement('p');
      newJoke.innerText = data.joke;
      jokes.appendChild(newJoke);
    });
};

window.onload = () => fetchJoke();