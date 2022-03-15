// Dada o array de nomes, retorne a quantidade de vezes em que aparecem 'a' letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
	const counterA = names.reduce((accumulator, currentValue) => {
		const currentLowered = currentValue.toLowerCase();
		const currentA = currentLowered.split('');

		currentA.forEach((element) => {
			if (element === 'a') {
				accumulator += 1;
			}
		})

		return accumulator;
	}, 0)

	return counterA;
}

console.log(containsA());