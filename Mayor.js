//Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.

let prompt = require('prompt-sync')();
let A = Number(prompt('Introduzca A: '));
let B = Number(prompt ('Introduzca B: '));

if(Number.isNaN(A,B)) {
    console.log('Jajajaja te has equivocado maquina')
} else {
if(A>B) {
    console.log(A+' es mayor que '+B);
}  else {
    if(B>A) {
        console.log(B+ ' es mayor que ' +A)
    } else {
        console.log('A y B son iguales')
    }
}
}
