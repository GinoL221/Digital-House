function siguietes10(numero) {
    for (let i = numero; i < numero + 11; i++) {
        console.log(i);
    }
}
let numero = 1;
siguietes10(numero);

function deATres() {
    for (let i = 1; i <= 57; i = i + 3) {
        console.log(i);
    }
}
deATres();

function enMayuscula(cadena) {
    console.log(cadena.toUpperCase());
}
enMayuscula("practicando el uso de los ciclos o bucles");

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
console.log(soloPares(numeros));