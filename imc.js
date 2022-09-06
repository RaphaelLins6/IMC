/*Exercício: Perguntar ao usuário PESO E ALTURA para
calcular o IMC. Após calcular o IMC, validar se está
dentro da seguinte classificação:
IMC    Categoria
< 20.7  Abaixo do peso
20.7 a 26.4 Peso ideal
26.5 a 27.8 Pouco acima do peso
27.9 a 31.1 Acima do peso
31.2 e acima Obesidade*/  

console.log('Exercício IMC');

let peso = Number(prompt('Digite o seu peso : '));
let altura = Number(prompt('Digite sua altura:  '));

function IMC (peso,altura){
let imc = (peso / altura**2);
if(imc < 20.7){ 
alert('Abaixo do peso');}
else if(imc >= 20.8 && imc <= 26.4){
alert('Peso ideal');}
else if(imc >= 26.5 && imc <= 27.8){
alert('Pouco acima do peso');}
else if(imc >= 27.9 && imc <= 31.1){
alert('Acima do peso');}
else{
alert('Obesidade');
}

}

IMC(peso, altura);