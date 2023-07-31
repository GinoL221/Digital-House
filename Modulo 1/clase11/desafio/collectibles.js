const data1 = require('./datos/figuras1.json');
const data2 = require('./datos/figuras2.json');
const data3 = require('./datos/figuras3.json');

const figuras = [...data1, ...data2, ...data3];

// let importar = function (brand) {
//     if (brand == "Hot Toys") {
//         return data1;
//     } else if (brand == "Bandai") {
//         return data2;
//     } else if (brand == "Star Wars") {
//         return data3;
//     } else {
//         null
//     }
// }

let importar = function (marca) {
    let resultado = [];
    for (let i = 0; i < figuras.length; i++) {
        if (figuras[i].marca.trim().toUpperCase() == marca.trim().toUpperCase()) {
            resultado.push(figuras[i]);
        }
    }
    return resultado;
}

// console.log(importar("Bandai"));

module.exports = importar;