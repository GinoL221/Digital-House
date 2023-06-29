/*
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:
*/

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