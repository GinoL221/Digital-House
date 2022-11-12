function mensajeUsuario(nombre, apellido, pagarCliente, tipoHamburguesa, arrayAdicionales) {
    return "Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: " + pagarCliente(tipoHamburguesa, arrayAdicionales) + "."
}

function pagarCliente(tipoHamburguesa, arrayAdicionales) {
    let montoHamburguesa = 0;
    let montoAdicionales = 0;
    let total = 0;

    switch (tipoHamburguesa.toLowerCase()) {
        case "carne a la parrilla":
            montoHamburguesa = 1800;
            break;
        case "pollo":
            montoHamburguesa = 1500;
            break;
        case "vegetariana":
            montoHamburguesa = 1200;
            break
        default:
            return "El tipo de hamburguesa ingresado no es valido";
    }

    if (arrayAdicionales[0]) {
        montoAdicionales += 30;
    }
    if (arrayAdicionales[1]) {
        montoAdicionales += 25;
    }
    if (arrayAdicionales[2]) {
        montoAdicionales += 5;
    }
    if (arrayAdicionales[3]) {
        montoAdicionales += 5;
    }
    if (arrayAdicionales[4]) {
        montoAdicionales += 5;
    }
    if (arrayAdicionales[5]) {
        montoAdicionales += 15;
    }
    if (arrayAdicionales[6]) {
        montoAdicionales += 10
    }
    if (arrayAdicionales[7]) {
        montoAdicionales += 10
    }
    total = montoHamburguesa + montoAdicionales;
    return total;
}

let nombre = "Gino";
let apellido = "Lencina";
let hamburguesa = "Carne a la Parrilla"
let jamon = false;
let queso = true;
let salsaTomate = true;
let mayonesa = true;
let mostaza = true;
let tomate = true;
let lechuga = true;
let cebolla = false;
let adicionales = [jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla]

//console.log(pagarCliente(hamburguesa,adicionales));
console.log(mensajeUsuario(nombre,apellido,pagarCliente,hamburguesa,adicionales));