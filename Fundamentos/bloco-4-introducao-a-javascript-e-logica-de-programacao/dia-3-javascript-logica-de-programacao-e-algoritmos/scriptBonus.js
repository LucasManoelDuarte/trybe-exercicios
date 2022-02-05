/*
    Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

    n = 5

    *****
    *****
    *****
    *****
    *****
*/

let valor = 5;
let symbol = '*';
let inputLine = '';

for (let i = 1; i <= valor; i += 1) {
    inputLine += symbol;
}

for (let i = 1; i <= valor; i += 1) {
    console.log(inputLine);
}

/*
    Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

    n = 5

    *
    **
    ***
    ****
    *****
*/

let valor = 5;
let symbol = '*';
let inputLine = '';

for (let i = 0; i <= valor; i += 1) {
    console.log(inputLine);
    inputLine += symbol;
}

/*
    Agora inverta o lado do triângulo. Por exemplo:

    n = 5

        *
       **
      ***
     ****
    *****
*/

let valor = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = valor;

for (let line = 0; line < valor; line += 1) {
    for (let column = 0; column <= valor; column += 1) {
        if (column < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }

    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};


/*
    Faça um programa que diz se um número definido numa variável é primo ou não.
*/

let value = 47;
let divNumber = 0;

for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
        divNumber += 1;
    }
}

if (divNumber === 2) {
    console.log(`${value} é um número primo`);
} else {
    console.log(`${value} não é um número primo`);
};
