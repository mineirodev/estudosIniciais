let listaNumerosSorteados = [];
let range = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número sercreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}

exibirMensagemIncial();

//Funçao que verifica o chute
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tetativa'
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Errou');
        exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
        exibirTextoNaTela('h1', 'Errou');
        exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas++
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * range + 1);
   let qntElementosLista = listaNumerosSorteados.length;
   if (qntElementosLista == range ){
        listaNumerosSorteados = [];
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}