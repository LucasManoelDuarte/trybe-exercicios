function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

/*
    Exercício 01

    O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

     - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

     - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

     - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

     const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listOfDays = document.getElementById('days');

function createDays() {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let listItem = document.createElement('li');
        listItem.innerText = dezDaysList[i];
        listItem.className = 'day';

        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            listItem.className = 'day holiday';
        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            listItem.className = 'day friday';
        } else if (dezDaysList[i] === 25) {
            listItem.className = 'day holiday friday';
        }

        listOfDays.appendChild(listItem);
    }
}

createDays();

/*
    Exercício 02

    Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

     - Adicione a este botão a ID "btn-holiday" .
     - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
let buttons = document.querySelector('.buttons-container');
let buttonHoliday = document.createElement('button');

function holidays(holiday) {
    buttonHoliday.innerText = holiday;
    buttonHoliday.id = 'btn-holiday';

    buttons.appendChild(buttonHoliday);
}

holidays('Feriados');

/*
    Exercício 03
    Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

     - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
let listItems = listOfDays.childNodes;
let countNUmberOfClicks = 0;

function changeColorHoliday() {
    countNUmberOfClicks += 1;

    for (let i = 1; i < listItems.length; i += 1) {
        let listItemsClass = listItems[i].className;

        if (listItemsClass.includes('holiday')) {
            listItems[i].style.backgroundColor = '#008000';
            listItems[i].style.color = 'white';

            if (countNUmberOfClicks % 2 === 0) {
                listItems[i].style.backgroundColor = 'rgb(238,238,238)';
                listItems[i].style.color = '#777';
            }
        }
    }
}

buttonHoliday.addEventListener('click', changeColorHoliday);

/*
    Exercício 04
    Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

     - Adicione a este botão o ID "btn-friday" .
     - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
let buttonFriday = document.createElement('button');

function fridays(day) {
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = day;

    buttons.appendChild(buttonFriday);
}

fridays('Sexta-feira');

/*
    Exercício 05
    Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

     - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
let countNumberOfClicksFriday = 0;

function changeTextFriday() {
    countNumberOfClicksFriday += 1;

    for (let i = 1; i < listItems.length; i += 1) {
        let listItemsClass = listItems[i].className;

        if (listItemsClass.includes('friday')) {
            listItems[i].innerText = 'SEXTOU :)';

            if (countNumberOfClicksFriday % 2 === 0) {
                listItems[i].innerText = i - 2;
            }
        }
    }
}

buttonFriday.addEventListener('click', changeTextFriday);

/*
    Exercício 06

    Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover', function() {
        listItems[i].style.fontSize = '50px';
    })

    listItems[i].addEventListener('mouseout', function() {
        listItems[i].style.fontSize = '20px';
    })
}

/*
    Exercícios 07

    Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

     - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
let myTasks = document.querySelector('.my-tasks');
let spanTask = document.createElement('span');

function tasks(tarefa) {
    spanTask.innerText = tarefa;

    myTasks.appendChild(spanTask);
}

tasks('Cozinhar');

/*
    Exercícios 08

    Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

     - O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
     - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

let divTask = document.createElement('div');

function createTaskDescription(cor) {
    divTask.style.backgroundColor = cor;
    divTask.className = 'task';

    myTasks.appendChild(divTask);
}

createTaskDescription('orange');