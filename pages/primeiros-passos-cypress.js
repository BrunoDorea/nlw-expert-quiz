const perguntas = [
    {
        pergunta: 'Qual comando não existe no Cypress?',
        respostas: [
            'cypress config',
            'cypress open',
            'cypress run',
            'cypress verify',
            'cypress cache',
        ],
        correta: 0
    },
    {
        pergunta: 'Sobre asserções assinale a alternativa incorreta',
        respostas: [
            'As asserções são feitas sempres de forma encadeada.',
            'Para validações implícitas podemos usar o "except".',
            'Podemos usar .should() e then() no auxílio de validações mais complexas.',
            'É possível encadearmos para vários comandos .should().',
            'As asserções podem ser do tipo Chai, Chain-jQuery e Chai-Sinon, fornecendo uma gama de opções para os testes.',
        ],
        correta: 1
    },
    {
        pergunta: 'Assinale a sentença verdadeira quando a diferenças entre Cypress e Selenium',
        respostas: [
            'Não podemos afirmar que o Cypress é melhor ou pior que o Selenium. Tudo depende do contexto de uso e da estratégia de automação.',
            'O Cypress possui muito mais vantagens que o Selenium, explicando porque o mercado está preferindo seu uso.',
            'O Cypress não exige conhecimento de programação, enquanto o Selenium exige grande conhecimento em Java.',
            'O Cypress foi feito para desenvolvedores enquanto o Selenium é feito para QAs.',
            'O Selenium é mais antigo que o Cypress, portanto ele é mais robusto e possui mais features.',
        ],
        correta: 0
    },
    {
        pergunta: 'Em que situação um alias não se torna necessário',
        respostas: [
            'Para retomar elementos de forma a substituir o uso de variáveis.',
            'Para retomar requisições que foram interceptadas durante o teste.',
            'Para auxíliar na validação de requisitos em testes de API.',
            'Para compartilhar contexto em uma suíte de testes.',
            'Para fazer asserções específicas a respeito de um elemento repassado pelo .get().',
        ],
        correta: 4
    },
    {
        pergunta: 'Quais tipos de testes o Cypress não viabiliza de forma padrão, ou seja, sem adições de plugins?',
        respostas: [
            'Teste de Performance',
            'Teste de Unidade',
            'Teste de Integração',
            'Teste E2E',
            'Teste de Componente',
        ],
        correta: 0
    },
    {
        pergunta: 'Com Cypress nós não podemos?',
        respostas: [
            'Executar testes',
            'Configurar testes',
            'Escrever testes em outras linguagens diferentes de JavaScript',
            'Escrever testes em JavaScript',
            'Depurar testes.',
        ],
        correta: 2
    },
    {
        pergunta: 'Sobre depuração assinale a alternativa correta',
        respostas: [
            'A depuração só usada em códigos voltados para desenvolvimento de software, portanto, não é possível depurar testes automatizados.',
            'Somente os desenvolvedores podem depurar código.',
            'No cypress não é possível utilizar ferramentas de depuração.',
            'A depuração é uma atividade do processo de desenvolvimento que consiste na busca, análise e correção de erros.',
            'O único comando possível de usar em cypress para auxiliar na identificação de erros é o .debug()',
        ],
        correta: 3
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (e) => {
            const estaCorreta = e.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
