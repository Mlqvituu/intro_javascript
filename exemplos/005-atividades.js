/*
Crie um programa que receba o nome e a nota de 4 materias.
Exibir o nome das 4 materias com a nota e a media final
Ex:
matematica: 7,00
ingles: 10,00
geografia: 8,00
fisica: 8,00
media: 8,25
*/

let entrada=require('prompt-sync')();

let mat1= entrada('digite o nome da 1 materia: ');
let n1 = parseFloat(entrada('digite a nota de' + mat1  ));

let mat2= entrada('digite o nome da 1 materia: ');
let n2= parseFloat(entrada('digite a nota de' + mat2 +  ': '));

let mat3= entrada('digite o nome da 1 materia: ');
let n3= parseFloat(entrada('digite a nota de' + mat3 + ': '));

let mat4= entrada('digite o nome da 1 materia: ');
let n4= parseFloat(entrada('digite a nota de' + mat4 + ': '));

let media = (n1 + n2 + n3 + n4) / 4;

console.log('Notas: ');
console.log(mat1 + ':' + n1.toFixed(2));
console.log(mat2 + ':' + n2.toFixed(2));
console.log(mat3 + ':' + n3.toFixed(2));
console.log(mat4 + ':' + n4.toFixed(2));
console.log('Media: ' + media.toFixed(2));


