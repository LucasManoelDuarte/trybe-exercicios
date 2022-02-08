/*
    Usando o objeto abaixo, faça os exercícios a seguir:

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/*
    1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
*/

console.log(`Bem-Vinda, ${info.personagem}`);

/*
    2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
*/

info['recorrente'] = 'Sim';

console.log(info);

/*
    3 - Faça um for/in que mostre todas as chaves do objeto.
*/

for (let key in info) {
    console.log(key);
}

/*
    4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
*/

console.log('');

for (let key in info) {
    console.log(info[key]);
}

/*
    5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/

console.log('');

let secondInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log(`${info.personagem} e ${secondInfo.personagem}`);
console.log(`${info.origem} e ${secondInfo.origem}`);
console.log(`${info.nota} e ${secondInfo.nota}`);
if (info.recorrente === secondInfo.recorrente) {
    console.log('Ambos recorrentes');
} else {
    console.log(`${info.recorrente} e ${secondInfo.recorrente}`);
};

/*-----------------------------------------------------------------------------------------------------------------------*/

/*
    Usando o objeto abaixo, faça os exercícios a seguir:

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
            {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
            },
        ],
    };
*/

console.log(' ');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

/*
    1 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
*/

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

/*
    2 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
*/

leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'});

console.log(leitor.livrosFavoritos);

console.log(' ');

/*
    3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
*/

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);