const entrada = require('prompt-sync')();

const senha = '1357908642';
let senhaDigitada = '';
let erros = -1;

do {
    erros++;

    if (erros  >= 3) {
        break;
    }


   senhaDigitada = entrada('Digite sua senha para entrar! ');
   } while (senha != senhaDigitada);

   if (erros  < 3) {
       console.log('Voce acessou o sistema! ');
   } else {
       console.log('Voce errou a senha 3 vezes, seu acesso foi bloqueado! ');
   }
