let pagoMes = 5000;
let pagoTotal = 0;
const consumosKWH = 400;

pagoTotal = consumosKWH > 300 ? pagoMes * 1.2 : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de " + consumosKWH + "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + pagoTotal)