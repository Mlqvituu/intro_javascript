const entrada = require('prompt-sync')();

let resMegaSena = [];
letMeujogo = [];
let acertos = 0;

for (let i = 0; i < 6; i++) {
    const numero = math.floor(math.random() * 60) + 1;
    resMegaSena.push(numero);
}



for (let i =  0; i  <  6; i++) {
    let numero = entrada('Digite o ' + i + 'º nº do jogo: ');
    meuJogo.push(numero);
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] == meuJogo[nJogo]) {
            acertos++;

        }
    }
}
 // mostrar resultado
mensagem = 'Seu jogo: ';

for (let n = 0; n < meuJogo.length; n++) {
    mensagem = mensagem + meuJogo[n] +
    (meuJogo.length == n + 1 ? '' : ' - ')


}

console.log('Voce acertou ' + acertos + ' número' + (acertos > 1 ? 's' : ''));