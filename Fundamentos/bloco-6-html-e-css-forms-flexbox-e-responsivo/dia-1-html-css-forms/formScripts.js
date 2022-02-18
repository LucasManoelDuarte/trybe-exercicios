const divLinhas = document.querySelectorAll('.formulario-linha');
const divBotao = divLinhas[divLinhas.length - 1];
const botaoEnviar = document.createElement('button');
const botaoLimpar = document.createElement('button');

botaoEnviar.type = 'submit';
botaoEnviar.textContent = 'Enviar';
divBotao.appendChild(botaoEnviar)

function removerPadraoBotao(event) {
    event.preventDefault();
}

botaoEnviar.addEventListener('click', removerPadraoBotao);

botaoLimpar.type = 'reset';
botaoLimpar.textContent = 'Limpar';
divBotao.appendChild(botaoLimpar);