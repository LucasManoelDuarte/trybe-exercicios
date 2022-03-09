/*
    Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

    const newEmployees = () => {
        const employees = {
            id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
            id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
            id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        }
        return employees;
    };
*/

const employee = (name) => {
    const userEmail = name.replace(' ', '_').toLowerCase();
    return {
        nomeCompleto: name,
        email: `${userEmail}@trybe.com`,
    }
}

const newEmployees = () => {
    const employees = {
      id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());

/*
    Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const numeroSorteado = (numeroApostado, numeroSorteio) => {
    console.log(`
    Número apostado: ${numeroApostado}
    Número Sorteado: ${numeroSorteio}
    `);

    if (numeroApostado === numeroSorteio) {
        return 'Parabéns, você ganhou!';
    } 

    return 'Tente novamente';
}

const sorteio = (aposta, verificaAposta) => {
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;

    return verificaAposta(aposta, numeroSorteado);
}

console.log(sorteio(4, numeroSorteado));

/*
    Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (right, attempt) => {
    let countAnswers = 0;
    for (let i = 0; i < right.length; i += 1) {
        if (attempt[i] === 'N.A') {
            countAnswers = countAnswers;
        } else if (right[i] === attempt[i]) {
            countAnswers += 1;
        } else {
            countAnswers -= 0.5;
        }
    }

    return countAnswers
}

const getResult = (template, student, callback) => {
    const result = callback(template, student);
    return result;
}

console.log(getResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));