/*
    1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false
*/

let palavra = 'casa';
let palavraReversa = '';

function verificaPalindrome(palavra) {
    for (let i = palavra.length - 1; i >= 0; i -= 1) {
        palavraReversa += palavra[i];
    }

    if (palavraReversa === palavra) {
        return true;
    }

    return false;
}

console.log(verificaPalindrome(palavra));

/*
    2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

let numbers = [2, 3, 6, 9, 15, 5];
let maior = numbers[0];
let indice = 0;

function verificaMaiorValor(array) {
    for (let i = 0; i < array.length; i += 1) {
        if (maior < array[i]) {
            maior = array[i];
            indice = i;
        };
    }

    return indice;
}

console.log(verificaMaiorValor(numbers));

/*
    
*/