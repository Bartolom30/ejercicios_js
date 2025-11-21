let prompt = require('prompt-sync')();
let altura = Number(prompt('Introduzca la altura de la piramide: '))

if (altura<=0) {
    console.log('0');

}   else {
    console.log('-1');

}

let contador = 0;
while(contador<altura) {


    process.stdout.write(' '.repeat(altura-1 -contador));

    if ( contador === 0) {
        process.stdout.write('*');
        process.stdout.write('\n');
    }   else if (contador === altura-1) {
        process.stdout.write(' '.repeat(2 * contador +1));
        process.stdout.write('\n');
    }   else {
    process.stdout.write('*');
    process.stdout.write(' '.repeat(2 * contador +1 - 2));
    process.stdout.write('*');
    process.stdout.write('\n');
    }
    
    contador++;
}
