let a= 10;
let b= 15;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

let numero= 12;
let numero1= 22;

if (numero1 > numero){
    console.log("É o maior número!");
} else {
    console.log("0");
}
let num= 5;
let num1= 10;
let num2= 15;

if (num2 > num && num1 < num2){
    console.log("É o maior dos números");
} else {
    console.log("0")
}

let numerico= true;

if (numerico = true ){
    console.log("Positivo");
} else {
    console.log("0");
}

let anguloA= 40;
let anguloB= 50;
let anguloC= 90;

let somaAngulos= anguloA + anguloB + anguloC;
let todosAngulos= anguloA > 0 && anguloB > 0 && anguloC;

if (todosAngulos){
    if(somaAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("Erro:inválido");
}

let xadrez = 'rainha';

switch (xadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};


let nota = 66;

if (nota < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}