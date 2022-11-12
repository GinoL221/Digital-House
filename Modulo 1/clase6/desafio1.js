let array = ["cocina", "lavarropas", "cafetera", "microondas", "termotanque", "licuadora"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(array[getRandomInt(0, array.length)])

let primero = array.shift();
array.push(primero);
console.log(array);

array.push("freezer", "tostadora");
console.log(array);

console.log(array.length);

if (array.includes("cocina")) {
    console.log("Producto Encontrado");
} else {
    console.log("El producto buscado no existe");
}

let texto = array.join(" ");
console.log(texto);

console.log(texto.length);

texto = texto.replace("freezer", "heladera");
console.log(texto);

let nuevoArray = texto.split(" ");
console.log(nuevoArray);