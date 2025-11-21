let prompt = require('prompt-sync')();


function leerVotosCandidatoConValidacion (candidato) {
    let num;
    do {
        num = Number(prompt('Introduzca los votos del candidato '+candidato+': '))
        if (Number.isNaN(num)) {
            console.log('Formato Incorrecto')
        }
    } while (!Number.isNaN);
    return num;
   
}


let contador;
let votos1,votos2,votos3;
let total;
let porcentaje,porcentaje2,porcentaje3;
let maximo;


for (contador = 0; contador<3; contador++) {
    let votos = leerVotosCandidatoConValidacion((contador+1));
    total = total+votos;

    if (votos>maximo) {
        maximo = votos;
    }

    switch (contador) {
        case 1:
            votos=votos1;
            porcentaje= (votos1*100)/total;
            break;
        case 2:
            votos=votos2;
            porcentaje2= (votos2*100)/total;
            break;
        case 3:
            votos=votos3;
            porcentaje3= (votos3*100)/total;
            break;
        default:
            break;
    }
}


console.log('El total de votos es: '+total);
console.log('El porcentaje del candidato 1 es: '+porcentaje);
console.log('El porcentaje del candidato 2 es: '+porcentaje2);
console.log('El porcentaje del candidato 3 es: '+porcentaje3);





