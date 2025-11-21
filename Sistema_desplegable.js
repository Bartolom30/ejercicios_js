//Se necesita un sistema que despliegue un menú con 4 opciones
// Si se presiona la opción 1, se calculará el área de un triángulo
// Si se presiona la opción 2, se calculará el área de un cuadrado
// Si se presiona la opción 3, se calculará el área de un círculo
// Si se presiona la opción 4, será la única forma de salir del sistema.

let prompt = require('prompt-sync')();

do {
console.log('Introduce 1 si desea calcular el area de un triangulo');
console.log('Introduce 2 si desea calcular el area de un cuadrado');
console.log('Introduce 3 si desea calcular el area de un circulo');
console.log('Introduce 4 si desea abandonar el sistema.');


let n = +prompt('Selecciona una opción ');

switch (n) {
    case 1:

        let base =Number(prompt('Introduzca la base: '));
        let altura =Number(prompt('Introduzca la altura: '));
        console.log('El area del triangulo es: '+base*altura);
        break;

    case 2:

        let lado =Number(prompt('Introduzca el lado del cuadrado: '));
        console.log('El area del cuadrado es: '+lado*lado);
        break;

    case 3:

        let radio =+prompt('Introduzca el radio: ');
        console.log('El area del circulo es: '+3.14*radio*radio);
        break;

    case 4:

        console.log('Programa finalizado');
        process.exit();

    default:
        console.log('Opción no valida, intente de nuevo');
    }
    console.log(' ')

}   while (true);