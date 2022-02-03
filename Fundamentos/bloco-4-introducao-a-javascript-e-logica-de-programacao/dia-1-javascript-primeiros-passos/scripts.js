// Exercício 01:

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

// Exercício 02:

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

// Exercício 03:

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

// Exercício 04:

const numero = -8;

if (numero > 0){
    console.log("Número positivo");
} else if (numero === 0) {
    console.log("Número zero");
} else {
    console.log("Número negativo");
}

// Exercício 05:

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

// Exercício 06:

const chess = "Cavalo";

switch (chess.toLowerCase()) {
    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
        break;

    case "rainha":
        console.log("pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser");
        break;

    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;

    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser.");
        break;

    case "cavalo":
        console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.");
        break;

    case "peao":
        console.log("Move-se sempre uma casa para frente.");
        break;

    default:
        console.log("Peça inválida");
}

// Referência do exercício 06 - https://www.soxadrez.com.br/conteudos/movimentos/

// Exercicios 07:

let nota = 93;

if (nota >= 90 && nota <= 100) {
    nota = "A";
    console.log("Nota: " + nota);
} else if (nota >= 80 && nota <= 89) {
    nota = "B";
    console.log("Nota: " + nota);
} else if (nota >= 70 && nota <= 79) {
    nota = "C";
    console.log("Nota: " + nota);
} else if (nota >= 60 && nota <= 69) {
    nota = "D";
    console.log("Nota: " + nota);
} else if (nota >= 50 && nota <= 59) {
    nota = "E";
    console.log("Nota: " + nota);
} else if (nota < 50) {
    nota = "F";
    console.log("Nota: " + nota);
} else {
    console.log("Nota inválida");
}

// Exercício 08:

const num1 = 11;
const num2 = 7;
const num3 = 91;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Exercício 09:

const num1 = 77;
const num2 = 5;
const num3 = 2;

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
    console.log(true);
} else {
    console.log(false);
}

// Exercício 10:

const custo = 100;
const valorVenda = 150;
imposto = custo * (20 / 100);

console.log(imposto);

if (custo === 0 || valorVenda === 0) {
    console.log("Valores inválidos");
} else {
    let custoTotal = custo + imposto;
    let lucro = valorVenda - custoTotal;
    let lucroMil = lucro * 1000;

    console.log(lucro);
    console.log(lucroMil);
}

// exercicio 11

let salarioBruto = 3000.00;
let inssAliquota = 0;
let impostoRendaAliquota = 0;
let parcela = 0;
let salarioBrutoJaReduzidoInss = 0;
let salarioLiquido = 0;

// INSS

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    inssAliquota = salarioBruto * (8 / 100);
    salarioBrutoJaReduzidoInss = salarioBruto - inssAliquota;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inssAliquota = salarioBruto * (9 / 100);
    salarioBrutoJaReduzidoInss = salarioBruto - inssAliquota;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inssAliquota = salarioBruto * (11 / 100);
    salarioBrutoJaReduzidoInss = salarioBruto - inssAliquota; 
} else if (salarioBruto > 5189.82) {
    inssAliquota = 570.88;
    salarioBrutoJaReduzidoInss = salarioBruto - inssAliquota; 
} else {
    console.log("Salário inválido");
}

// IR

if (salarioBrutoJaReduzidoInss <= 1903.98) {
    salarioLiquido = salarioBrutoJaReduzidoInss;
} else if (salarioBrutoJaReduzidoInss >= 1903.99 && salarioBrutoJaReduzidoInss <= 2826.65) {
    parcela = 142.80;
    impostoRendaAliquota = (salarioBrutoJaReduzidoInss * (7.5 / 100)) - parcela;
    salarioLiquido = salarioBrutoJaReduzidoInss - impostoRendaAliquota;
} else if (salarioBrutoJaReduzidoInss >= 2826.66 && salarioBrutoJaReduzidoInss <= 3751.05) {
    parcela = 354.80;
    impostoRendaAliquota = (salarioBrutoJaReduzidoInss * (15 / 100)) - parcela;
    salarioLiquido = salarioBrutoJaReduzidoInss - impostoRendaAliquota;
} else if (salarioBrutoJaReduzidoInss >= 3751.06 && salarioBrutoJaReduzidoInss <= 4664.68) {
    parcela = 636.13;
    impostoRendaAliquota = (salarioBrutoJaReduzidoInss * (22.5 / 100)) - parcela;
    salarioLiquido = salarioBrutoJaReduzidoInss - impostoRendaAliquota;
} else {
    parcela = 869.36;
    impostoRendaAliquota = (salarioBrutoJaReduzidoInss * (27.5 / 100)) - parcela;
    salarioLiquido = salarioBrutoJaReduzidoInss - impostoRendaAliquota;
}

console.log("Salário Bruto: R$" + salarioBruto);
console.log("Imposto INSS: R$ " + inssAliquota);
console.log("Salário Bruto Reduzindo o imposto do INSS: R$ " + salarioBrutoJaReduzidoInss);
console.log("Imposto de Renda: R$" + impostoRendaAliquota);
console.log("Salário após os descontos de impostos (Salário Líquido): R$" + salarioLiquido);
