// Crie um programa que receba seu nome e sua idade
// e apresente na saída qual será sua idade daqui
// a 25 anos
// Saída - "Victor daqui a 17 anos sua idade será 34"

let entrada = require('prompt-sync')();

let nome1 = entrada('Digite seu nome: ');
let idade1 = parseInt(entrada('Digite sua idade: '));


let nome2 = entrada('Digite seu nome: ');
let idade2 = parseInt(entrada('Digite sua idade: '));


let nome3 = entrada('Digite seu nome: ');
let idade3 = parseInt(entrada('Digite sua idade: '));

let soma = idade1 + idade2 + idade3;

let divisao = soma / 3;

console.log(+ soma);


console.log('media entre as 3 idades é: ' + divisao);