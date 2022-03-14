// Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
	const array = arrays.reduce((accumulator, currentValue) => {
		console.log(`accumulator: ${accumulator} ---------------- current: ${currentValue}`);
		return accumulator.concat(currentValue);
	}, []);

	return array;
}

console.log(flatten());