// Se necesita un sistema que solicita dos números, los cuales son un rango. 
// De los cuales queremos que imprima el total de la suma de todos los números que se encuentran dentro de este rango.

let prompt = require('prompt-sync')();

let menor = Number(prompt('Introduzca el número que marque el rango menor: '));
let mayor = Number(prompt('Introduzca el número que marque el rango mayor: '));
let suma =0;

for (let i = menor+1;i<mayor;i++) {
suma = suma + i;
}

console.log('La suma de todos los número entre '+menor+' y '+mayor+' es '+ suma);