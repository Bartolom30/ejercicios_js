//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no.
// Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo,
// se puede acceder si hemos superado una prueba de acceso.

let prompt = require('prompt-sync')();
let titulo = prompt('Título de bachillerato(S/N): ');
let acceso;
if (titulo=='S')  {
    console.log('Puedes acceder al grado sin problema.')
}
 else if (titulo=='N') {
    acceso = prompt('¿Cómo ha ido la prueba de acceso? (Aprobada/Suspendida)');
 } if(acceso == 'Aprobada') {
    console.log('Puedes acceder al grado sin problemas');
 } else if (acceso == 'Suspendida') {
    console.log('No puedes acceder al grado');
 }