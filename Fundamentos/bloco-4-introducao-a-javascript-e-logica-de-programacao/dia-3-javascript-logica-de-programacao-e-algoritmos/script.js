/* 
    Exercício 01: fatorial de 10
    Obs.: 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 
*/

let fatorial = 10;

for (let i = (fatorial - 1); i >= 1; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);


// Exercício 02: Inverter uma palavra

let word = "Banana";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    reverseWord += word[i];
}

console.log(word);
console.log(reverseWord);

// Exercício 03: Retornar o maior e o menor valor dentro do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    }

    if (array[i].length < menor.length) {
        menor = array[i];
    }
}


console.log(maior);
console.log(menor);