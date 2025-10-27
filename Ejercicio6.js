//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
// Diseñar un algoritmo para este propósito.

let prompt = require('prompt-sync')();
let niños = Number(prompt('Introduzca el número de niños: '));
let niñas = Number(prompt('Introduzca el número de niñas: '));

if(Number.isNaN(niños,niñas)) {
    console.log('Formato Incorrecto')
}
else {
    let suma = niños + niñas;
    porniños = ((niños*100)/suma);
    porniñas = ((niñas*100)/suma);
    console.log('En una clase de ' + suma+ ' alumnos: ', 'Hay un '+porniñas+ '% de niñas y un '+porniños+ '% de niños.')
}