// 1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
// tomando en cuenta que los depósitos serán representados por valores positivos y
// los retiros por valores negativos.
// 2. Crear una función (Callback) que reciba como parámetro el array creado. La función
// tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
// actual de retiros y el saldo actual del cliente.
// 3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
// como el array que contiene las operaciones bancarias. Esta función tendrá la
// responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
// depósitos, el saldo actual de retiros y el saldo actual.

function mensajeCliente(nombre, apellido, saldos, operacionesBancarias) {
    const [retiros, depositos, saldoTotal] = saldos(operacionesBancarias);
    return `Estimada ${nombre} ${apellido} : \nEl monto total de los depósitos es de: $ ${depositos}. \nEl monto total de los retiros es de: $ ${retiros}. \nPor lo tanto, su saldo actual en la cuenta es de: $ ${saldoTotal}.`
}

function saldos(operacionesBancarias) {
    let retiros = 0;
    let depositos = 0;
    let saldoTotal = 0;
    for (let i = 0; i < operacionesBancarias.length; i++) {
        if (operacionesBancarias[i] < 0) {
            retiros += operacionesBancarias[i];
        }
        if (operacionesBancarias[i] > 0) {
            depositos += operacionesBancarias[i];
        }
        saldoTotal += operacionesBancarias[i];
    }
    return [retiros, depositos, saldoTotal];
}

let nombre = "Gino";
let apellido = "Lencina";
let operacionesBancarias = [1000, 30000, -1500, -2500, 6000, -250];
console.log(mensajeCliente(nombre, apellido, saldos, operacionesBancarias));
