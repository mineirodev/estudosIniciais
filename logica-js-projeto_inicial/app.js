alert('Boas vindas ao jogo do numero secreto');
let range = prompt('Defina o range do jogo')
let numeroSecreto  = parseInt(Math.random() * range + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao NS
while(chute != numeroSecreto){
    chute = prompt( `Escolha um número entre 1 e ${range}`);
    //se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Esse é um operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Voce acertou o numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1){
//     alert(`Voce acertou o numero secreto é ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Voce acertou o numero secreto é ${numeroSecreto} com ${tentativas} tentativa`);
// }