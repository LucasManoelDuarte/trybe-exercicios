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
let inputLIne = '';

for (let i = 1; i <= valor; i += 1) {
    inputLIne += symbol;
}

for (let i = 1; i <= valor; i += 1) {
    console.log(inputLIne);
}
