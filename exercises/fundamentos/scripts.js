//qual a posiçao da rainha?
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;
// qual a posiçao da peça?
let posicaoPecaLinha = 2;
let posicaoPecaColuna = 2;
// Algo para guardar se o ataque foi bem sucedido ou nao
let ataqueBemSucedido = false;

//quais sao os caminhos que a rainha pode atacar

// se a peca estiver na mesma linha que a rainha, ataque bem sucedido
if (posicaoPecaLinha === posicaoPecaLinha) {
    console.log("Ataque bem sucedido na mesma linha");
    ataqueBemSucedido = true;
}

if (posicaoPecaColuna === posicaoRainhaColuna) {
    console.log("Ataque bem sucedido na mesma linha");
    ataqueBemSucedido = true;
}
//diagonal inferior esquerda
for (let index = 1; index< 8; index += 1) {
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna - index;
    //Se a linha atual da rainha for igual a posicao da peca linha e a coluna atual da rainha for igual a posicao da peca coluna, mostre ataque bem sucedido.
    if (posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha) {
        console.log("Ataque bem sucedido na diagonal inferior esquerdo");
        ataqueBemSucedido = true;
        break;
    }
}
//diagonal superior esquerda
for (let index = 1; index <8; index +=1) {
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaColuna - index;
     //Se a linha atual da rainha for igual a posicao da peca linha e a coluna atual da rainha for igual a posicao da peca coluna, mostre ataque bem sucedido.
     if (linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
         ataqueBemSucedido = true;
         console.log("Ataque bem sucedido na diagonal superior esquerda");
     }
}

//diagonal superior direita
for (let index = 1; index < 8; index += 1) {
    let linhaAtualRainha = posicaoRainhaLinha + index;
    if (linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna) {
        ataqueBemSucedido = true;
        console.log("Ataque Bem sucedido na diagonal superior direita");
    }
}

// diagonal inferior direita
for (let index = 1; index < 8; index +=1) {
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna + index;
    if(linhaAtual === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna) {
        ataqueBemSucedido = true;
    }
    console.log("Ataque Bem sucedido na diagonal inferior direita");
}