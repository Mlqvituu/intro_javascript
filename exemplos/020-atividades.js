const entrada = require('prompt-sync')();

function gerarNumeroAleatorio(excluidos) {
  let numero;
  do {
    numero = Math.floor(Math.random() * 60) + 1;
  } while (excluidos.includes(numero));
  return numero;
}

let resMegaSena = [];
let meuJogo = [];
let acertos = 0;

for (let i = 0; i < 6; i++) {
  const numero = gerarNumeroAleatorio(resMegaSena);
  resMegaSena.push(numero);
}

for (let i = 1; i <= 6; i++) {
  let numero;
  do {
    numero = parseInt(entrada(`Digite o ${i}º número do jogo: `));
    if (isNaN(numero)) {
      console.log('Digite um número válido!');
    } else if (numero < 1 || numero > 60) {
      console.log('O número deve estar entre 1 e 60!');
    } else if (meuJogo.includes(numero)) {
      console.log('O número já foi escolhido, digite outro!');
    }
  } while (isNaN(numero) || numero < 1 || numero > 60 || meuJogo.includes(numero));
  meuJogo.push(numero);
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
  for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
    if (resMegaSena[nMega] === meuJogo[nJogo]) {
      acertos++;
    }
  }
}

console.log('');
console.log('-');
console.log('');
console.log('Resultado do sorteio:', resMegaSena.join(' - '));
console.log('Seu jogo:', meuJogo.join(' - '));
console.log('');
console.log('Você acertou', acertos, 'número' + (acertos !== 1 ? 's' : ''));