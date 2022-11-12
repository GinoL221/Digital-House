function crearUnNumero(array, numero) {
    if (array.includes(numero)) {
        return "El número " + numero + " sí existe en el array";
    }
    return "El número " + numero + " no existe";
}
let numeros = [2, 4, 7, 2, 6, 3, 2, 4, 9, 4]
console.log(crearUnNumero(numeros, 9));

function juegoDeTrompito(array, vueltas) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let random = getRandomIntInclusive(0, 5);
    return array[random];
}
let array = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
let vueltas = 2;
//console.log(juegoDeTrompito(array,vueltas))

function sumatoriaDeParesEImpares(arrayDiez) {
    let pares = [];
    let impares = [];
    for (let i = 0; i < 11; i++) {
        if (arrayDiez[i] % 2 == 0) {
            pares.push(arrayDiez[i]);
        } else {
            impares.push(arrayDiez[i]);
        }
    }
    return [pares, impares];
}
let diezNumeros = [40, 28, 15, 46, 23, 79, 87, 90, 100, 58];
const [pares, impares] = sumatoriaDeParesEImpares(diezNumeros);
console.log("Numeros Pares: " + pares + "\nNumeros Impares: " + impares)
