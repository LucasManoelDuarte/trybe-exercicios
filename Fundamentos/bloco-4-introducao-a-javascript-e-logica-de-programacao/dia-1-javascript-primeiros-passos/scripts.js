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

// Exercício 04

const numero = -8;

if (numero > 0){
    console.log("Número positivo");
} else if (numero === 0) {
    console.log("Número zero");
} else {
    console.log("Número negativo");
}

// Exercício 05

const angulo1 = 60;
const angulo2 = -5;
const angulo3 = 70;
let resultado = null;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Angulo inválido");
} else if (angulo1 + angulo2 + angulo3 === 180){
    resultado = true;
    console.log(resultado);
} else if (angulo1 + angulo2 + angulo3 != 180) {
    resultado = false;
    console.log(resultado)
}

