// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 10));
console.log(sum(1, 2, 4, 5));
console.log(sum(1));
console.log(sum());