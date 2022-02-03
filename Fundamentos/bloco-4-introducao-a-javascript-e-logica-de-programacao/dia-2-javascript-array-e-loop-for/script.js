let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    resultado += numbers[i];

    console.log(numbers[i]);
}

media = resultado / numbers.length;

console.log("A soma de todos os valores dentro do array numbers: " + resultado);
console.log("A média de todos os valores dentro do array numbers: " + media);
