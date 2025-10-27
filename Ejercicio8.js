//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar.
// En el caso de ser 0, debe visualizar “el número no es par ni impar”
// (para que un número sea par, se debe dividir entre dos y que su resto sea 0).

let prompt = require('prompt-sync')();
let numero = Number(prompt('Introduzca el número: '));

if(Number.isNaN(numero)) {
    console.log('Formato incorrecto');
}
else {
    if(numero==0) {
        console.log(numero+' no es par ni impar')
    }
        else if(numero%2==1) {
            console.log(numero+ ' es impar')
     }
        else if(numero%2==0) {
            console.log(numero+ ' es par');
        }
}
