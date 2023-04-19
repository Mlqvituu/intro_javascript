/*
    Crie um programa que receba duas notas 
    calcule a média entre elas e apresente
    o texto aprovado caso a média seja >= 7
    e reprovado caso seja menor.
    A notas digitadas devem estar entre 0 e 10!
    */
   
    const entrada = require('prompt-sync')();

    const nota1 = parseFloat(entrada('Digite sua nota 1:  '));
    const nota2 = parseFloat(entrada('Digite sua nota 2:  '));
    if (nota1 >= 0 && nota1 <= 10 || nota2 >= 0 && nota1 <= 10){
        const media = (nota1 + nota2) /2;

        if (media >= 7) {
            console.log('aprovado');
        } else {
            console.log('reprovado');}
        } else {
            console.log('Nota invalida, so pode nota de 0 a 10')
        }