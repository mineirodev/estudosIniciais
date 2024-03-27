//Desafio Curso Logica de programacao: Explore funcoes e lista

//Interagindo com HTML

//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicaConsole() {
    console.log('O botão foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function clicaAlerta() {
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function clicaPrompt() {
    let nomeCidade = prompt('Informe o nome de uma cidade brasileira: ');
    alert(`Estive em ${nomeCidade} e lembrei de voce.`);
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function clicaSoma() {
    let numero1 = parseFloat(prompt('Insira o primeiro numero'));
    let numero2 = parseFloat(prompt('Insira o segundo numero'));
    let resultadoSoma = numero1 + numero2;
    alert(`O resultado da soma entre ${numero1} e ${numero2} é ${resultadoSoma}`);
}