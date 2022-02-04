/* 
    Exercício 01: fatorial de 10
    Obs.: 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 
*/

let fatorial = 10;

for (let i = (fatorial - 1); i >= 1; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);


