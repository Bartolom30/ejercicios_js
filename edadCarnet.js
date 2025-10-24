var prompt = require('prompt-sync')();

let edad = Number(prompt('Introzuca su edad: '));
console.log(typeof(edad));
console.log(edad);

if(edad >=18) {
  let carnet = prompt('Tienes carnet?(S/N) ');
  if(carnet === 'S') {
    console.log('Puedes conducir');

  } else {
    console.log('No puedes conducir');

} } else {
    console.log('No puedes conducir');
  }
  
