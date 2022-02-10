/*
    1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

    2 - Adicione a tag main com a classe main-content como filho da tag body ;

    3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

    4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

    5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

    6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

    7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

    8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

    9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
*/

// Exercício 01
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - Javascript DOM';

let body = document.getElementsByTagName('body');
body[0].appendChild(title);

// Exercício 02
let main = document.createElement('main');
main.className = 'main-content';

body[0].appendChild(main);

// Exercício 03
let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// Exercício 04
let p = document.createElement('p');
p.innerText = 'Algum texto';

section.appendChild(p);

//Exercício 05
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

main.appendChild(sectionLeft);

//Exercício 06
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';

main.appendChild(sectionRight);

//Exercícios 07
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

sectionLeft.appendChild(image);

//Exercício 08
let list = document.createElement('ul');

let arrayNumberInFull = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let i = 0; i < arrayNumberInFull.length; i += 1) {
    let listItem = document.createElement('li');
    listItem.innerText = arrayNumberInFull[i];
    list.appendChild(listItem)
}

sectionRight.appendChild(list);

//Exercício 09
for (let i = 1; i <= 3; i += 1) {
    let subtitle = document.createElement('h3');
    main.appendChild(subtitle);
}

/*-----------------------------------------------------------------*/

/*
    10 - Adicione a classe title na tag h1 criada;

    11 - Adicione a classe description nas 3 tags h3 criadas;

    12 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

    13 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

    14 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

    15 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
*/

//Exercício 10
title.className = 'title';

//Exercício 11
let subtitles = document.getElementsByTagName('h3');

for (let i = 0; i < subtitles.length; i += 1) {
    subtitles[i].className = 'description';
}

//Exercício 12
main.removeChild(sectionLeft);

//Exercício 13
sectionRight.style.margin = 'auto';

//Exercício 14
section.style.backgroundColor = 'green';

//Exercício 15

for (let i = list.childNodes.length - 1; i < list.childNodes.length; i -= 1) {
    let currentChild = list.childNodes[i];

    if (currentChild.innerText === 'Nove' || currentChild.innerText === 'Dez') {
        currentChild.remove();
    }
}
