//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual o dia da semana?");

if (diaDaSemana == 'Sabado' || diaDaSemana == 'Domingo'){
    alert('Bom fim de Semana');
} else{
    alert('Boa semana');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um numero positivo ou negativo: ');

if (numero < 0){
    alert('Esse numero é negativo');

}else {
    alert('Esse numero é positivo')
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = 100;

if(pontos >= 100){
    alert('Parabens voce venceu');
}else{
    alert('Tente novamente para ganhar');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 5000;

alert(`O Saldo da sua conta é: R$${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome: ');

alert(`Bem vindo a Unisys ${nome}`);