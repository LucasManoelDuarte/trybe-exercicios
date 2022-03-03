/*
	Crie uma função que receba um número e retorne seu fatorial.

	- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
	- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

const fatorial = (numero) => {
	for (let i = numero - 1; i > 0; i -= 1) {
		numero *= i;
	}

	return numero
}

console.log(fatorial(5));

/*
	Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const maiorPalavra = (frase) => {
	let maior = '';
	const teste = frase.split(' ');
	
	for (let i = 0; i < teste.length; i += 1) {
		if(teste[i].length > maior.length) {
			maior = teste[i];
		}
	}

	return maior;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

/*
	Crie uma página que contenha:

	- Um botão ao qual será associado um event listener ;
	- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
	- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

const botao = document.getElementById('botao');
const contador = document.getElementById('contador');
const contadorAtualizado = document.createElement('span');
let contadorDeClicks = 0;

contadorAtualizado.innerHTML = '0';
contador.appendChild(contadorAtualizado);

botao.addEventListener('click', () => {
	contadorDeClicks += 1;
	contadorAtualizado.innerHTML = contadorDeClicks.toString();
});

/*
	Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

	Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

	Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
*/

const encontreX = (palavra) => {
	const texto = 'Tryber x aqui!';
	let novoTexto = '';

	for(let i = 0; i < texto.length; i += 1) {
		if(texto[i] === 'x') {
			novoTexto = texto.replace('x', palavra);
		}
	}

	return novoTexto;
}

const funcao1 = encontreX('loucura');
console.log(funcao1);

const habilidades = ['JavaScript', 'Git', 'GitHub', 'HTML', 'CSS'];

const concatenarHabilidades = (frase) => {
	const fraseCompleta = `${frase} Minhas cinco principais habilidades são:
	${habilidades.sort()}`

	return fraseCompleta;
}

console.log(concatenarHabilidades(funcao1));