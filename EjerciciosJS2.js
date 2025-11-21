const prompt = require('prompt-sync')();


function leerNumero (mensajePrompt) {

    Number(prompt(mensajePrompt === undefined ? 'Introduzca número: ' :mensajePrompt));
}



let jugar = true;
let numAdivinar = 3;
let num;

while (jugar) {
    num = validaEntradaNum();
    if (num === numAdivinar) {
        jugar = false;
        console.log('Ganas!!!!')
    }   else if (num > numAdivinar) {
        console.log ('Número a adivinar es mayor');
    }   else if (num < numAdivinar) {
        console.log ('Número a adivinar es menor');
    }
}

function validaEntradaNum() {



let num = leerNumero();

while (num < 1 || num > 100) {
    num=leerNumero();
}

return num;
}
console.log(`num = ${num}`);


//LOOP GAME

/*
if (num>100 || num<0) {
    num = Number(prompt('Ese número no esta en el rango posible, escribe otro:'));
    
} 

}

while (num!==67) {
    if (num<67) {
        console
    } else {
        console.log('1');
    }
    num = Number(prompt('Inténtalo de nuevo:'));
    
    if (num>100 || num<0) {
    num = Number(prompt('Ese número no esta en el rango posible, escribe otro:'));
    }
}
console.log('0 (Has acertado).');

*/