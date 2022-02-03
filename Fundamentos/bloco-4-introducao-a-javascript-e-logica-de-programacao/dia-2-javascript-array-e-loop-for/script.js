let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let media = 0;
let maior = 0;
let impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    resultado += numbers[i];

    if (maior < numbers[i]) {
        maior = numbers[i];
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

if (impares === 0) {
    console.log("Nenhum valor ímpar encontado");
} else {
    console.log("A quantidade de valores ímpares encontrados dentro do array numbers: " + impares);
}

