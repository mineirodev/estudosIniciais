//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso) {
    return  peso / (altura * altura);
}

let resultado = calculaIMC(1.65, 94);
console.log(`Seu IMC é ${resultado}`);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero) {
    let contador = numero;
    let fatorial = numero;
    while (contador > 2) {
        contador--;
        fatorial = fatorial*contador;
    }
    return fatorial;
}
let resultado1 = calculaFatorial(5);
console.log(resultado1);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarEmReais(valorEmDolar) {
    let contacao = 4.80;
    return valorEmDolar*contacao;
}
let valorEmReais = converteDolarEmReais(1);
console.log(valorEmReais);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

  //Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);