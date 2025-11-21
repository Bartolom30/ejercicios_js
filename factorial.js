// Se necesita un programa para calcular el factorial de un número dado, que corresponda a la fórmula: N! = N*(N-1)*(N-2)* ... *(N-(N-1))

let prompt = require('prompt-sync')();
let numero = +prompt("Introduzca su número: ");

let i = numero;
let factorial= 1;


while (i>1) {
    factorial *= i;
    i--;
}


console.log('El factorial de '+numero+' es '+ factorial);