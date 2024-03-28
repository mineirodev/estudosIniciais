//Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log('Olá mundo');
}

exibirOlaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNoConsole(nome) {
   console.log(`Olá, ${nome}!`);
}

exibirNoConsole('Felipe');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornaDobroNum(numero) {
    return numero * 2;
}
retornaDobroNum(5);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function retornaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3; 
}

retornaMedia(1, 6, 2);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaiorNumero(numero1, numero2) {
    
    if(numero1 > numero2) {
        return numero1;
    }else {
        return numero2;
    }
}

retornaMaiorNumero(7, 5);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornaMultiplicacao(numero) {
    return numero * numero;
}

retornaMultiplicacao(5);