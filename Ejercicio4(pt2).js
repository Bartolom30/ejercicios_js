// Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares.
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.


let prompt = require('prompt-sync')();
let a = Number(prompt('Introduzca N: '));

let i=0;
let save= 0;
let cont= 0;
while(cont<a) {
    i = i + 2 ;
    save += i;
    cont++
    
}
console.log(save);