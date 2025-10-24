//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres
// Si no lo es, muestra la suma.

let prompt = require('prompt-sync')();
let a = Number(prompt('Introduzca A: '));
let b = Number(prompt ('Introduzca B: '));
let c = Number(prompt ('Introduzca C: '));

if(Number.isNaN(a,b,c)) {
    console.log('Introduzca un valor valido')

}else if (a<0) {
    let resultado = a*b*c;
    console.log('El producto sería: ' +resultado)
    }else {
        let resultado = a+b+c;
        console.log('La suma sería: '+resultado)
    }