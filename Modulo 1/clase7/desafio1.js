function mensajeCliente(nombre, apellido, saldos, operacionesBancarias) {
    const [retiros, depositos, saldoTotal] = saldos(operacionesBancarias);
    return "Estimada " + nombre + " " + apellido + ": \nEl monto total de los depósitos es de: $" + depositos + ". \nEl monto total de los retiros es de: $" + retiros + ". \nPor lo tanto, su saldo actual en la cuenta es de: $" + saldoTotal + "."
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
