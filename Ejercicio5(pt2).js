//Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1;
// Realizar el algoritmo que calcule la media aritmética.
// Suponemos que el usuario no insertará números negativos.

let prompt = require('prompt-sync')();
let suma= 0;
let cont= 2;
do {
let a = Number(prompt('Introduzca otro número: '));
suma = suma + a;
cont++;
}
while (a!==-1) 
media = suma/cont;
console.log(media);