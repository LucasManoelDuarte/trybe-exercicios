/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    3. Crie uma função que mude a cor do quadrado vermelho para branco.
    4. Crie uma função que corrija o texto da tag <h1>.
    5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Exercício 01
function changeTextOfParagraph() {
    let paragraph = document.querySelector('.center-content p');
    paragraph.innerText = 'Trabalhando como desenvolvedor, morando sozinho e codando muito!';
}

changeTextOfParagraph();

// Exercício 02
function changeBackgroundColor(element, color) {
    let square = document.querySelector(element);
    square.style.backgroundColor = color;
}

changeBackgroundColor('.main-content', 'rgb(76, 164, 109)');

// Exercício 03

changeBackgroundColor('.center-content', 'white');