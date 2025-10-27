//Algoritmo que lea un número por teclado.
// En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error.
// Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo,
// visualizando el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ).
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')();
let a = Number(prompt('Introduzca el número: '));
if (Number.isNaN(a)) {
    console.log('Formato incorrecto')
}

else {
    console.log(`La raíz de ${a} es ${Math.sqrt(a)} y su potencia es ${Math.pow(a,2)}`)
}