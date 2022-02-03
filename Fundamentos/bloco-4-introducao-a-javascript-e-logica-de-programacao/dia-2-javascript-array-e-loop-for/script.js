let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = null;
let media = null;
let maior = numbers[0];
let menor = numbers[0];
let impares = null;
let oneToTwentyFive = [];
let resultadoDivisao = null;

for (let i = 0; i < numbers.length; i += 1) {

    resultado += numbers[i];

    if (numbers[i] > maior) {
        maior = numbers[i];
    }

    if (numbers[i] < menor) {
        menor = numbers[i];
    }

    if (numbers[i] % 2 != 0) {
        impares += 1;
    }

    console.log(numbers[i]);
}

media = resultado / numbers.length;

console.log("A soma de todos os valores dentro do array numbers: " + resultado);

if (media > 20) {
    console.log("O valor da média é maior que 20");
} else if (media === 20) {
    console.log("O valor da média é igual a média");
} else {
    console.log("O valor da média é menor que 20");
}

console.log("A média de todos os valores dentro do array numbers: " + media);

console.log("O maior valor dentro do array numbers: " + maior);
console.log("O menor valor dentro do array numbers: " + menor);

if (impares === 0) {
    console.log("Nenhum valor ímpar encontado");
} else {
    console.log("A quantidade de valores ímpares encontrados dentro do array numbers: " + impares);
}

console.log("");

for (let i = 1; i <= 25; i += 1) {
    oneToTwentyFive.push(i);
}

console.log(oneToTwentyFive);

for (number of oneToTwentyFive) {
    resultadoDivisao = number / 2;

    console.log(number + " / 2 = " + resultadoDivisao);
}
