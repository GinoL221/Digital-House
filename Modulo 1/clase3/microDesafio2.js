const nombre = "Gino";
const apellido = "Lencina";
let sueldoActual = 40000;
let porcentajeAumento = 25;
let nuevoSueldo;
let calculoAumento;
calculoAumento = ((sueldoActual * porcentajeAumento) / 100);
nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola, estimad@ " + nombre + " " + apellido)
console.log("En base a su sueldo actual:" + "$" + sueldoActual)
console.log("Ha recibido un aumento del " + porcentajeAumento + "% :" + "$" + calculoAumento)
console.log("y su nuevo sueldo es de: $" + nuevoSueldo)
