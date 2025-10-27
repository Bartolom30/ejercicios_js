//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. 
//Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

let prompt = require('prompt-sync')();
let precio_total = Number(prompt('Introduzca el precio total de su compra: '));
let mes = (prompt('Introduzca el mes: '));

if (Number.isNaN(precio_total)) {
    console.log('Formato incorrecto');

} else {
    switch (mes) {
        case 'Octubre':
            precio_total = precio_total-((precio_total*15)/100);
            console.log('El total de la compra es de '+precio_total+ ' euros');
            break;
    
        default:
            console.log('El total de la compra es de: '+precio_total+ ' euros');
            break;
    }
}