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