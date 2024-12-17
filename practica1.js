let array = [];

let nombre = prompt("ingresar nombre:");

let apellido = prompt("ingresar apellido:");
//parseint --> transforma en numero
let edad = parseInt(prompt("ingresar edad:"));

array.push (nombre, apellido, edad);
console.log (array.join(" - "));

