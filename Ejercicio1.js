//Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.
//https://www.npmjs.com/package/prompt-sync/v/4.2.0

let prompt = require('prompt-sync')();

let A = (prompt('Introduzca A: '));

console.log(typeof A);

let B = (prompt('Introduzca B: '));

console.log(typeof B);

//Patrón de intercambio
BTemporal = B;
B = A;
A = BTemporal;

//Backtip tambien sirve para declarar cadenas
console.log(`A = ${A}, B = ${B}`);

//Sin interpolación de cadenas
console.log(`a = ` + A + `, b = ` + B);