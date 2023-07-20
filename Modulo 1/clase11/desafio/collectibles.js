const data1 = require('./datos/figuras1.json');
const data2 = require('./datos/figuras2.json');
const data3 = require('./datos/figuras3.json');

let importar = function (brand) {
    if (brand == "Hot Toys") {
        return data1;
    } else if (brand == "Bandai") {
        return data2;
    } else if (brand == "Star Wars") {
        return data3;
    } else {
        null
    }
}

// console.log(collectibles.importar("Bandai"));

module.exports = importar;