//Realiza una calculadora de menú.
//El algoritmo mostrará un menú de operaciones aritméticas (+-*/,raíz)
//Seguidamente a la elección de una operación solicitará los 2 operandos
//Mostrando el resultado por pantalla e informando de nuevo con el menú.
//El menú además de las operaciones básicas tendrá que tener una opción de salida que se indicará con la letra q.


let prompt = require('prompt-sync')();

do {

console.log('Introduce 1 si desea sumar.');
console.log('Introduce 2 si desea restar.');
console.log('Introduce 3 si desea multiplicar.');
console.log('Introduce 4 si desea dividir.');
console.log('Introduce 5 si desea realizar la raíz.');
console.log('Introduce q si desea abandonar el programa.');

let inicio = prompt('Selecciona una opción: ');

if (inicio === 'q'){

    console.log('Programa finalizado.')
    process.exit();

}

let opcion = Number(inicio);

switch (opcion) {

    case 1:

        let num1 =Number(prompt('Introduce el primer número: '));
        let num2 =Number(prompt('Introduzca el segundo número: '));
        console.log('La suma de '+num1+' y '+num2+' es: '+(num1+num2));
        break;

    case 2:

        let num3 =Number(prompt('Introduce el primer número: '));
        let num4 =Number(prompt('Introduzca el segundo número: '));
        console.log('La resta de '+num3+ ' y '+num4+' es: '+(num3-num4));
        break;

    case 3:

        let num5 =Number(prompt('Introduce el primer número: '));
        let num6 =Number(prompt('Introduzca el segundo número: '));
        console.log('La multiplicación de ' +num5+ ' y '+num6+' es: '+(num5*num6));
        break;

    case 4:

        let num7 =Number(prompt('Introduce el primer número: '));
        let num8 =Number(prompt('Introduzca el segundo número: '));
        console.log('La división de '+num7+' y '+num8+ ' es: '+(num7/num8));
        break;

    case 5:

        let num9 =Number(prompt('Introduce un número: '));
        console.log('La raiz de '+num9+' es: '+Math.sqrt(num9));
        break;

    default:

        console.log('Opción no valida, intente de nuevo');
    }

}   while(true);