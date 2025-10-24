//Se pide un algoritmo que lea dos números desde teclado, calculando y 
//escribiendo en pantalla el valor de su suma, resta, producto y división.

let prompt = require('prompt-sync')();

let A = Number(prompt('Introduzca A: '));
let B = Number(prompt('Introduzca B: '));

suma = A + B;
resta = A - B;
multiplicacion = A * B;
division = A/B;

console.log(`La suma es igual a:  ${suma}`);
console.log(`La resta es igual a:  ${resta}`);
console.log(`La multiplicación es igual a:  ${multiplicacion}`);
console.log(`La división es igual a:  ${division}`);