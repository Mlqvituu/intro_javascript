/*
    Programa da mega-sena
    Crie um programa que compare o resultado de dois arrays
*/
  
const entrada = require('prompt-sync') ();

let resMegaSena = [5, 15, 25, 35, 45, 55];
let meuJogo = [];
let acertos = 0;

for (let i =  0; i  <  6; i++) {
    let numero = entrada('Digite o ' + i + 'º nº do jogo: ');
    meuJogo.push(numero);
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] === meuJogo[nJogo]) {
            acertos++;

        }
    }
}

console.log('Voce acertou ' + acertos + ' número' + (acertos > 1 ? 's' : ''));