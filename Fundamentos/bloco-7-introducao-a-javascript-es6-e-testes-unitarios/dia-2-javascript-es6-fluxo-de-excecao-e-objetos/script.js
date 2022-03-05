function verifyIfIsEmpty(value1, value2) {
	if(value1 === '' || value2 === '') {
		throw new Error('Por favor, não deixe de adicionar os valores!')
	}
}

function verifyIfIsNumber(value1, value2) {
	if(isNaN(value1) || isNaN(value2)) {
		throw new Error('Digite um valor numérico!');
	}
}

function sum() {
	try {
		const value1 = document.getElementById('value1').value;
		const value2 = document.getElementById('value2').value;
		verifyIfIsEmpty(value1, value2);
		verifyIfIsNumber(value1, value2);
		const result = parseInt(value1) + parseInt(value2);
		document.getElementById('result').innerHTML = `Resultado: ${result}`;
	} catch (error) {
		alert(error.message);
	} finally {
		document.getElementById('value1').value = '';
		document.getElementById('value2').value = '';
	}

}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
