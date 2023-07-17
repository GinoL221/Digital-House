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
        const bicycleNotSold = this.bicycle.filter(bicycle => bicycle.sold == false);
        return bicycleNotSold;
    },
    // 2 - d
    totalDeVentas: function () {
        const bicycleSold = this.bicycle.filter(bicycle => bicycle.sold == false)
        let totalSold = bicycleSold.reduce((total, now) => total + now.value, 0);
        return totalSold;
    }
}
console.log(dhBicy.biciParaLaVenta());