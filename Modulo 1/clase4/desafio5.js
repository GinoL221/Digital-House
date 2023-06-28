/*
1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar
el aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta que:
    ● La velocidad debe estar comprendida entre 268 a 278 km/hr.
    ● La altura debe estar comprendida entre 150 m a 300 m.
*/

function aterrizarAvion(velocidad, altura) {
    if (velocidad > 268 && velocidad < 278) {
        if (altura > 150 && altura < 300) {
            return 'El avion puede aterrizar';
        }
        else {
            return 'El avion no puede aterrizar';
        }
    } else {
        return 'El avion no puede aterrizar';
    }
}

console.log(aterrizarAvion(280, 400));