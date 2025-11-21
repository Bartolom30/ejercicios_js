let prompt = require('prompt-sync')();
let num = Number(prompt('Introduce el número de trabajadores: '));
let suma = 0;

for (let i =1; i<=num; i++) {
    let turno = (prompt('Introduce el turno del ' +i+ ' trabajador: '));
      if (turno != 'primero' || turno != 'segundo' || turno != 'tercero') {
        console.log ('Ese turno no existe.')
        break;
    }
    let puesto = (prompt('Introduce el puesto del '+i+' trabajador: '));
     if (puesto != 'obrero' || puesto != 'licenciado' || puesto != 'tecnico') {
        console.log ('Ese puesto no existe.')
        break;
    }

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
        suma += (30*horas)
     }
     if (puesto == 'tecnico') {
        suma += (50*horas);
    }
     if (puesto == 'licenciado') {
        suma += (100*horas)
     }
     let sumatotal = 0;
     sumatotal += suma;
     console.log('El sueldo total semanal es de: ' +sumatotal);
}