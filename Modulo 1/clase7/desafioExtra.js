// 1. Crear una función que pida un valor por parámetro y muestre los 10 números
// siguientes.
// 2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
// 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
// 100.
// 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
// de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
// las letras de la cadena de texto pero en MAYÚSCULA.
// Pista: Investigar el método .toUpperCase.
// 5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
// la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
// Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
// número par es aquel que se puede dividir entre 2.

function siguietes10(numero) {
    for (let i = numero; i < numero + 11; i++) {
        console.log(i);
    }
}
let numero = 1;
//siguietes10(numero);

function deATres() {
    for (let i = 1; i <= 57; i = i + 3) {
        console.log(i);
    }
}
//deATres();

function enMayuscula(cadena) {
    console.log(cadena.toUpperCase());
}
//enMayuscula("practicando el uso de los ciclos o bucles");

let numeros = [4, 5, 8, 3, 60, 1, 30];
function soloPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
//console.log(soloPares(numeros));

function unoCien() {
    let total = 0
    for (let i = 0; i <= 100; i++) {
        total += i;
    }
    return total;
}

console.log(unoCien())