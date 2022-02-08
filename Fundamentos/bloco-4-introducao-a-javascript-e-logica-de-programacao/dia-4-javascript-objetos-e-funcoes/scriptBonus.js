// Exercícios Bônus 4.4

/*
    1 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
*/

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let newArray = [];

function arrayOfNumbers(vector) {
    for (let i = 0; i < vector.length; i += 1) {
        for (let j = vector[i].length - 1; j >= i; j -= 1) {
            if(vector[i][j] % 2 === 0) {
                newArray.push(vector[i][j]);
            }
        }
    }

    return newArray.sort(function(a, b) {return b, a});
}

console.log(arrayOfNumbers(vector));
