const perguntas = [
    {
        pergunta: 'Qual é a função do método push() em arrays?',
        respostas: [
            'Adicionar um novo elemento ao início do array',
            'Remover o último elemento do array',
            'Adicionar um novo elemento ao final do array',
            'Inverter a ordem dos elementos no array',
            'Nenhuma das alternativas anteriores',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a maneira correta de declarar uma variável em JavaScript?',
        respostas: [
            'var myVar = 10;',
            'myVar := 10;',
            'int myVar = 10;',
            'myVar => 10;',
            'const myVar = 10;',
        ],
        correta: 0
    },
    {
        pergunta: 'O que o operador "===" faz em JavaScript?',
        respostas: [
            'Compara o valor e o tipo de duas variáveis',
            'Compara apenas o valor de duas variáveis',
            'Compara apenas o tipo de duas variáveis',
            'Atribui um valor a uma variável',
            'Nenhuma das alternativas anteriores',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual método é usado para remover o último elemento de um array em JavaScript?',
        respostas: [
            'pop()',
            'shift()',
            'unshift()',
            'splice()',
            'slice()',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a forma correta de comentar múltiplas linhas em JavaScript?',
        respostas: [
            '// Este é um comentário de múltiplas linhas',
            '/* Este é um comentário de múltiplas linhas */',
            '<!-- Este é um comentário de múltiplas linhas -->',
            '--> Este é um comentário de múltiplas linhas <--',
            '# Este é um comentário de múltiplas linhas',
        ],
        correta: 1
    },
    {
        pergunta: 'O que o método parseFloat() faz em JavaScript?',
        respostas: [
            'Converte uma string em um número inteiro',
            'Converte uma string em um número decimal',
            'Converte um número inteiro em uma string',
            'Arredonda um número decimal para o número inteiro mais próximo',
            'Nenhuma das alternativas anteriores',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a saída do seguinte código? console.log(typeof undefined);',
        respostas: [
            'number',
            'undefined',
            'object',
            'string',
            'function',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a função do operador ternário em JavaScript?',
        respostas: [
            'Atribuir um valor a uma variável',
            'Comparar dois valores e retornar true ou false',
            'Executar uma operação baseada em uma condição',
            'Criar uma função anônima',
            'Nenhuma das alternativas anteriores',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual método é usado para adicionar e/ou remover elementos de um array em JavaScript?',
        respostas: [
            'concat()',
            'splice()',
            'slice()',
            'push()',
            'pop()',
        ],
        correta: 1
    },
    {
        pergunta: 'O que o método Math.random() faz em JavaScript?',
        respostas: [
            'Retorna um número inteiro aleatório',
            'Retorna um número decimal aleatório entre 0 e 1',
            'Arredonda um número decimal para o número inteiro mais próximo',
            'Retorna o valor absoluto de um número',
            'Nenhuma das alternativas anteriores',
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
