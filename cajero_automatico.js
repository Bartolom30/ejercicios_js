//Escribir un programa modular que simule un cajero automático con las opciones de depósitos, retiros y ver saldo.

let prompt = require('prompt-sync')();

function leerOpcionMenu() {

console.log('Introduce 1 si desea consultar su saldo.');
console.log('Introduce 2 si desea ingresar dinero.');
console.log('Introduce 3 si desea retirar dinero.');
console.log('Introduce 4 si desea abandonar el sistema.');

let opcion = Number(prompt('Introduzca la opción que desee: '));

if (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {
    console.log('Esa operación no es válida');
}

if (opcion==4) {
    process.exit();
}
console.log('Has elegido la opcion '+opcion);
}

function leerCantidadPositiva() {
let dinero;
    while (dinero<0) {
    let dinero = Number(prompt('Introduzca una cantidad de dinero: '));
    console.log('Valor incorrecto');
    if (dinero>0) {
        console.log('Has introducido '+dinero);
        break;
    }

}
}


do {

    let num=leerOpcionMenu();

    switch (num) {
        case 1: 

            let num2=leerCantidadPositiva();
            break;

        case 2:

            num2=leerCantidadPositiva();
            break;

        case 3:

            num2=leerCantidadPositiva();
            break;

        default:
            console.log('No existe ese comando');
    }

    
}   while (true);