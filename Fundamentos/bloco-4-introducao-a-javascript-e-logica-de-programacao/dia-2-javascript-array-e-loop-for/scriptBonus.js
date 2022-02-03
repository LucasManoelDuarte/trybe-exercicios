let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1){
        if (numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log("Array ordenado de forma crescente:");
console.log(numbers);

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log("Array ordenado de forma decrescente:");
console.log(numbers);

//Exercício 03 (Bônus)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
        newNumbers.push(numbers[i] * numbers[i + 1]);
    } else {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log(newNumbers);