// Desafio 2 - 1
const importar = require("./collectibles");

// Desafio 2 - 2
const data1 = importar("Hot Toys");
const data2 = importar("Bandai");
const data3 = importar("Star Wars");

// Desafio 2 - 3
const unifiedCollectibles = [...data1, ...data2, ...data3];

const collectibles = {
    // Desafio 2 - 4
    figuras: unifiedCollectibles,
    // Desafio 2 - 5.a
    listFigures: function () { unifiedCollectibles.forEach(collectable => console.log(collectable)) },
    // Desafio 2 - 5.b
    figuresByBrand: function (brand) {
        let forBrand = unifiedCollectibles.filter(collectable => collectable.marca == brand)
        return forBrand
    }
}

// Desafio 2 - 5.b
// collectibles.listFigures();
console.log(collectibles.figuresByBrand("Star Wars"));