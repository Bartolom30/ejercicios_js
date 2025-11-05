let prompt = require('prompt-sync')();
let num = Number(prompt('Introduce un número: '));

while (num>100 || num<0) {
    numero = Number(prompt('Ese número no esta en el rango posible, escribe otro:'));
    
} 

while (num!==67) {
    if (num<67) {
        console.log('-1');
    } else {
        console.log('1');
    }
    num = Number(prompt('Inténtalo de nuevo:'));
}
console.log('0 (Has acertado).');

