const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
    Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

function adicionaTurno(objeto, chave, valor) {
    objeto[chave] = valor;
}

adicionaTurno(lesson2, 'turno', 'noite');
console.table(lesson2);

/*
    Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const listarChaves = (objeto) => Object.keys(objeto);

console.log(listarChaves(lesson1));

/*
    Crie uma função para mostrar o tamanho de um objeto.
*/

const tamanhoDoObjeto = (objeto) => Object.keys(objeto).length;

console.log(tamanhoDoObjeto(lesson3));

/*
    Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const listarValores = (objeto) => Object.values(objeto);

console.log(listarValores(lesson2));

/*
    Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)
*/

let allLessons = {
    lesson1: Object.assign({}, lesson1),
    lesson2: Object.assign({}, lesson2),
    lesson3: Object.assign({}, lesson3)
};

console.log(allLessons);

/*
    Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas
*/

const totalEstudantes = (objeto) => {
    let total = 0;
    const estudantesLesson1 = objeto.lesson1.numeroEstudantes;
    const estudantesLesson2 = objeto.lesson2.numeroEstudantes;
    const estudantesLesson3 = objeto.lesson3.numeroEstudantes;

    total = estudantesLesson1 + estudantesLesson2 + estudantesLesson3;

    return `Total de estudantes: ${total}`;
}

console.log(totalEstudantes(allLessons));

/*
    Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
*/

const valorEspecifico = (objeto, chave) => {
    const teste = Object.values(objeto);

    return teste[chave];
}

console.log(valorEspecifico(lesson1, 0));

/*
    Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

const verificaChaveValor = (objeto, chave, valor) => {
    const par = Object.entries(objeto);
    let validacao = false

    for(let i in par) {
        if(par[i][0] === chave && par[i][1] === valor) {
            validacao = true;
        } 
    }

    return validacao;
}

console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
console.log(verificaChaveValor(lesson3, 'materia', 'Maria Clara'));
