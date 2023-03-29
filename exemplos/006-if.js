// Estruturas condicionais

const entrada = require('prompt-sync')();

let idadeTXT = entrada('Digite sua idade: ');
let idade = parseInt(idadeTXT);

if (idade > 18) {
    console.log('Voce tem mais de 18 anos!');

}

if (idade < 18) {
    console.log('Voce tem menos de 18 anos!');
}

if (idade === 18) {
    console.log('Voce tem 18 anos!');
}