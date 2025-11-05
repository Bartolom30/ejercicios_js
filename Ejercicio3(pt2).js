//Algoritmo que nos calcule la suma de los N primeros números naturales.
// N se leerá por teclado.

let prompt= require('prompt-sync')();
let n = Number(prompt('Introduzca un número: '));
let contador = 1;
let suma =0;

while (contador<=n) {
    suma = suma + contador;
    contador++
    console.log('La suma es: '+suma);
}
