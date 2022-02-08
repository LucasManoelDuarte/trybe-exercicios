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

let numeros = [2, 3, 6, 9, 15, 5];
let maior = numeros[0];
let indice = 0;

function verificaMaiorValor(array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        };
    }

    return indice;
}

console.log(verificaMaiorValor(numeros));

/*
    3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/

let novosNumeros = [5, 8, 78, 2, 3, 9, 14];
let menor = novosNumeros[0];
let indiceMenor = 0;

function verificaMenorValor(array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < menor) {
            menor = array[i];
            indiceMenor = i;
        }
    }

    return indiceMenor;
}

console.log(verificaMenorValor(novosNumeros));

/*
    4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
*/

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = nomes[0];

function verificarMaiorNome(array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > maiorNome.length) {
            maiorNome = array[i];
        }
    }

    return maiorNome;
}

console.log(verificarMaiorNome(nomes));

/*
    5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/

let repeteNumeros = [2, 5, 7, 8, 9, 32, 10, 7, 32, 7];
let repete = 0;
let maiorRepeticao = 0;
let valorRepetido = 0;

function verificaNumeroRepetido(array) {
    for (let i = 0; i < array.length; i += 1) {
        let numeroVerificador = array[i];
        repete = 0;

        for (let j = 0; j < array.length; j += 1) {
            if (array[j] === numeroVerificador) {
                repete += 1;
            }
        }

        if (repete > maiorRepeticao) {
            maiorRepeticao = repete;
            valorRepetido = array[i];
        }
    }

    return valorRepetido;
}

console.log(verificaNumeroRepetido(repeteNumeros));

/*
    6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
*/

let valor = 7;
let somatorio = 0;

function somaTodosOsNumeros(number) {
    for (let i = 1; i <= number; i += 1) {
        somatorio += i;
    };

    return somatorio;
};

console.log(somaTodosOsNumeros(valor));

/*
    7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
*/

let palavraNormal = 'apartamento';
let finalDaPalavra = 'sa';

function verificaFinalDaString(word, wordEnding) {
    if (word.endsWith('sa')) {
        return true;
    }

    return false;
}

console.log(verificaFinalDaString(palavraNormal, finalDaPalavra));
