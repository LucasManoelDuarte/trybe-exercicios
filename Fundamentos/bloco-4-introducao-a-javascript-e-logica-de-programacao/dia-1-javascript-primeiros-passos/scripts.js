// Exercício 01

const num1 = 32;
const num2 = 2;

let soma = num1 + num2;
console.log(soma);

let subtrai = num1 - num2;
console.log(subtrai);

let multiplica = num1 * num2;
console.log(multiplica);

let divide = num1 / num2;
console.log(divide);

let modulo = num1 % num2 === 0;
console.log(modulo);

// Exercício 02

const valor1 = 10;
const valor2 = 8;
let maior = null;

if (valor1 > valor2) {
    maior = valor1;
    console.log("Entre " + valor1 + " e " + valor2 + " o maior é: " + maior);
} else if (valor1 < valor2) {
    maior = valor2;
    console.log("Entre " + valor1 + " e " + valor2 + " o maior é: " + maior);
} else {
    console.log("Os valores são iguais");
}

// Exercício 03

const v1 = 20;
const v2 = 21;
const v3 = 35;

if (v1 > v2 && v1 > v3) {
    console.log(v1 + " é o maior valor");
} else if (v2 > v1 && v2 > v3){
    console.log(v2 + " é o maior valor");
} else {
    console.log(v3 + " é o maior valor");
}

