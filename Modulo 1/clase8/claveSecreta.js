function laClaveSecreta(array) {
    let largo = array.length
    let nuevoArray = []

    for (let i = 0; i < largo; i++) {
        nuevoArray += array.pop();
    }
    while (nuevoArray.indexOf("*") != -1) {
        nuevoArray = nuevoArray.replace("*", "")
    }
    return nuevoArray;
}
let array = ["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]
let array2 = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]

console.log(laClaveSecreta(array))
console.log(laClaveSecreta(array2))