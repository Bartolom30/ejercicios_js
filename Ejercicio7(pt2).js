let prompt = require('prompt-sync')();
let num;

let fin = 0;
let total = 0;
let contador = 0;
let maximo= -Infinity;
let minimo= Infinity;


do {
num = Number(prompt('Introduce un número: '));


if (maximo < num && num!=0) {
    maximo=num;
}


if (minimo>num && num!=0) {
    minimo=num;
}


if (num!=0) {
total += num;
contador++;
}


}
while (num != fin)

console.log('La media de estos número es: '+total/contador)
console.log('El número máximo es: '+maximo);
console.log('El número mínimo es: '+minimo);