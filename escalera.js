const prompt = require('prompt-sync')();


const ancho = Number(prompt('Introduzca el ancho de la escalera: '))
const pisos = Number(prompt('Introduce el número de pisos: '))

let validacion = true;

if (Number.isNaN(ancho) || ancho % 2 ===1) {
    validacion = false;

}

if (Number.isNaN(pisos)) {
    validacion = false;
}

if (validacion) {
    pintarescalera(ancho,pisos);
}

function pintarescalera(ancho,pisos) {
   for (let i = 0;i < pisos; i++) {

        for (let j=0;j < 3; j++) {
            process .stdout.write('-'.repeat((ancho/2)*(pisos-1-i)));
            process .stdout.write('*'.repeat(ancho));
            process .stdout.write('\n');
        }
    }
}
