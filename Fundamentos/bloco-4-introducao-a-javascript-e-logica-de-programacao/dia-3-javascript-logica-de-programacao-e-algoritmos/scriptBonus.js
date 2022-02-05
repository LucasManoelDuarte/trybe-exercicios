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
    Faça uma pirâmide com n asteriscos de base:

    n = 5

        *
       ***
      *****
*/

let value = 5;
let symbol = '*';
let inputLine = '';
let middle = (value + 1) / 2;
let controlLeft = middle;
let controlRight = middle;

for (let line = 0; line <= middle; line += 1) {
    for (let column = 0; column <= value; column += 1) {
        if (column > controlLeft && column < controlRight) {
            inputLine = inputLine + symbol;
        } else {
            inputLine = inputLine + ' ';
        }
    }

    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
}

/*
    Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

    Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
    n = 7

            *
           * *
          *   *
         *******
*/

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

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
