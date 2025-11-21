let prompt = require('prompt-sync')();
let num = Number(prompt('Introduce el número de trabajadores: '));
let suma = 0;
let maximo=-Infinity;
let minimo=Infinity;
let media;
 let sumatotal = 0;
 let i=0;

for (i =1; i<=num; i++) {
    let turno = (prompt('Introduce el turno del ' +i+ ' trabajador: '));
     /* if (turno != 'primero' || turno != 'segundo' || turno != 'tercero') {
        console.log ('Ese turno no existe.')
        break;
    }*/
    let puesto = (prompt('Introduce el puesto del '+i+' trabajador: '));
     /*if (puesto != 'obrero' || puesto != 'licenciado' || puesto != 'tecnico') {
        console.log ('Ese puesto no existe.')
        break;
    }
*/
    let horas = (prompt('Introduce el número de horas trabajadas a la semana: '))


    if (turno == 'primero') {
        suma += 200;
    }
     if (turno == 'segundo') {
        suma += 100;
    }
     if (turno == 'tercero') {
        suma += 300;
    }
     if (puesto == 'obrero') {
        suma += (30*horas);
     }
     if (puesto == 'tecnico') {
        suma += (50*horas);
    }
     if (puesto == 'licenciado') {
        suma += (100*horas);
     }
     sumatotal += suma;
     console.log('El sueldo total semanal es de: ' +suma);

     if (maximo<suma) {
    maximo=suma;
     }

    if (suma<minimo) {
    minimo=suma;
     }
}



console.log('El sueldo máximo es de: '+maximo);
console.log('El sueldo mínimo es de: '+minimo);
console.log('La media de los sueldos es: '+(sumatotal/(i-1)));