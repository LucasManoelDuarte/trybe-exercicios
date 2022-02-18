const divBotao = document.getElementById('botoes');
const botaoEnviar = document.createElement('button');
const botaoLimpar = document.createElement('button');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');

botaoEnviar.type = 'submit';
botaoEnviar.textContent = 'Enviar';
divBotao.appendChild(botaoEnviar)

// function removerPadraoBotao(event) {
//     event.preventDefault();
// }
// 
// botaoEnviar.addEventListener('click', removerPadraoBotao);

botaoLimpar.type = 'reset';
botaoLimpar.textContent = 'Limpar';
divBotao.appendChild(botaoLimpar);
