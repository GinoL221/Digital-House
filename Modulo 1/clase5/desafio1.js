function alquilerVehiculo(tipo, dias, sillaBebe) {
    let montoCobrar = 0
    switch (tipo.toLowerCase()) {
        case "compacto":
            montoCobrar = 14000;
            break;
        case "mediano":
            montoCobrar = 17000;
            break;
        case "camioneta":
            montoCobrar = 28000;
            break
        default:
            return "El tipo de vehiculo " + tipo + " no es valido";
    }
    montoCobrar += montoCobrar * dias;
    if (sillaBebe) {
        montoCobrar += 1200 * dias;
        return "Estimado cliente: en base al tipo de vehículo " + tipo + " y la silla para bebe alquilados, considerando los " + dias + " días utilizados, el monto total a pagar es de $" + montoCobrar + ".";
    }
    return "Estimado cliente: en base al tipo de vehículo " + tipo + " alquilados, considerando los " + dias + " días utilizados, el monto total a pagar es de $" + montoCobrar + "."
}