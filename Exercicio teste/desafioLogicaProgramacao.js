// 1. Crie uma função que valide se um número é positivo, negativo ou zero.


function validaNum (numero){
    
    if (numero == 0){
        console.log('O numero é zero');
    } else if (numero > 0){
        console.log('O numero é positivo');
    } else {
        console.log('O numero é negativo');
    }

}

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.

function validaMaiorIdade(idade) {
    
    if (idade >= 18) {
        console.log('Você é maior de idade'); 
    } else {
        console.log('Você é menor de idade'); 
    }
}

// 3. Desenvolva uma função que valide se uma string é vazia ou não.

function validaString(string) {
    
    if (string == '') {
        console.log('A string está vazia'); 
    } else {
        console.log('A string não é vazia. O texto é:' + string); 
    }

}

// 4. Crie uma função que determine se um ano é bissexto

function verificaAnoBissexto(ano) {

    if ( ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {

        console.log(`O ano ${ano} é bissexto`);

    } else {
    
        console.log(`O ano ${ano} não é bissexto`);

    }

}

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

function mediaNum(num1 , num2) {
    
    if (isNaN(num1) || isNaN(num2)){
    
       return 'Os dois argumentos devem ser numero. Verifique';
    } 
    
    return (num1 + num2)/2;
}

//6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho

function validaTamanhoArray(array) {
    return array.length;
}

//7. Crie um array e utilize a função includes para verificar se um elemento específico está presente

const meuArray = [10, 20, 30, 40, 50];
console.log("O array contém o número 30?", meuArray.includes(30));

//8.  Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function validaElementoArray(array, elem) {
    
    if (array.includes(elem)) { 
        return true;
    } else {
        return false;
    }
}

//9/10. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

function validaStringArray(array, string) {
    
    if (array.includes(string)) { 
        return true;
    } else {
        return false;
    }
}