let frutas = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < frutas.length; index +=1) {
    soma += frutas[index];
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log("Valor menor que 16");
}