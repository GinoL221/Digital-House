const n1 = 15;
const n2 = 10;
let esMayor;
let esMenor;

const suma = n1 + n2;
console.log("La suma de " + n1 + "+" + n2 + " es igual: " + suma);
const resta = n1 - n2;
console.log("La resta de " + n1 + "-" + n2 + " es igual: " + resta);
console.log("La multiplicacion de " + n1 + "*" + n2 + " es igual: " + n1 * n2);
console.log("La division de " + n1 + "/" + n2 + " es igual: " + n1 / n2);
console.log("El modulo de " + n1 + "%" + n2 + " es igual: " + n1 % n2);

if (n1 > n2) {
    esMayor = true
} else {
    esMayor = false
}
console.log(n1 + " es mayor que " + n2 + " " + esMayor)

if (n1 < n2) {
    esMenor = true;
} else {
    esMenor = false;
}
console.log(n1 + " es menor que " + n2 + " " + esMenor)
