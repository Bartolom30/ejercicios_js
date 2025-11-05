let prompt = require('prompt-sync')();
let personas = Number(prompt('Introduzca el número de personas: '));
let contador =1;
let total = 0;
let maximo = 0;
let minimo = Infinity;
let contador2 = 0;
let contador3 = 0;

while (contador<=personas) {
let hijos = Number(prompt('Introduzca el número de hijos de la '+contador+' persona: '));
total += hijos;


if (hijos>=1) {
    contador2++;
}   else if (hijos===0) {
    contador3++;
}

if (hijos>maximo) {
    maximo=hijos;
}

if (hijos<minimo) {
    minimo=hijos;
}

contador++;

}
console.log('*******************************');
console.log('*******************************');

console.log('Hay '+contador2+ ' personas que tienen hijos');
console.log('Hay '+contador3+ ' personas que no tienen hijos');
console.log('La media de hijos sería: '+total/contador+ ' por persona');
console.log('El número máximo de hijos es de: '+ maximo);
console.log('El número mínimo de hijos es de: '+ minimo);
