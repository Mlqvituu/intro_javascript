
const entrada = require('prompt-sync')();

const senha = '1357908642';
let senhaDigitada = '';

 do{
      senhaDigitada = entrada('Digite sua senha para entrar! ');
 } while (senha != senhaDigitada);

 console.log('Voçe acessou o sistema!');