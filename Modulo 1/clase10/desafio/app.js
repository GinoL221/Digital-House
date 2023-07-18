const { notEqual } = require("assert");

let dhBicy = {
    // 2 - a
    bicycles: require("./dataBicycles"),
    buscarBici: function (idABuscar) {
        let bicycle = this.bicycles.find(bicycle => bicycle.id == idABuscar);
        return bicycle;
    },
    // 2 -c
    venderBici: function (idABuscar) {
        let bicycle = buscarBici(idABuscar);
        if (bicycle) {
            bicycle.sold = true;
            return bicycle;
        }
        return ("Bicicleta no encontrada");
    },
    // 2 - c
    biciParaLaVenta: function () {
        const bicycleNotSold = this.bicycles.filter(bicycle => bicycle.sold == false);
        return bicycleNotSold;
    },
    // 2 - d
    totalDeVentas: function () {
        const bicycleSold = this.bicycles.filter(bicycle => bicycle.sold == false)
        let totalSold = bicycleSold.reduce((total, now) => total + now.value, 0);
        return totalSold;
    },
    // Ejercicio extra - punto 1
    aumentoBici: function (increase) {
        const withIncrese = this.bicycles.map(bicycle => (increase * bicycle.value) / 100 + bicycle.value);
        return withIncrese;
    },
    // Ejercicio extra - punto 2
    biciPorRodado: function (road) {
        const byRolled = this.bicycles.filter(bicycle => bicycle.road == road);
        return byRolled;
    },
    // Ejercicio extra - punto 3
    listarTodasLasBici: function () {
        const total = this.bicycles.forEach(element => console.log(element));
        return "";
    }
}
console.log(dhBicy.listarTodasLasBici());