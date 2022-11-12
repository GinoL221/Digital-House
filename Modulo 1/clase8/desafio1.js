function montoAPagar(cursosConPrecio, cursosAlumno) {
    let montoAPagar = 0;
    cursosConPrecio = cursosConPrecio.join(",");
    cursosConPrecio = cursosConPrecio.split(",");
    for (let i = 0; i < cursosConPrecio.length; i = i + 2) {
        for (let ii = 0; ii < cursosAlumno.length; ii++) {
            if (cursosConPrecio[i] == cursosAlumno[ii].toLowerCase()) {
                montoAPagar += parseInt(cursosConPrecio[i + 1]);
            }
        }
    }
    return montoAPagar;
}

function mostrarUsuario(nombre, apellido, cursosConPrecio, cursosAlumno, montoAPagar) {
    let leyenda = ""
    for (let i = 0; i < cursosAlumno.length; i++) {
        leyenda += i + 1 + ".- " + cursosAlumno[i].toUpperCase() + "\n"
    }
    let montoAbonar = montoAPagar(cursosConPrecio, cursosAlumno);
    return "Estimado " + nombre + " " + apellido + ", en función de los cursos seleccionados:\n" + leyenda + "El monto total a pagar es de: $" + montoAbonar + ".\nBienvenido a la gran aventura Digital House."
}

let cursosConPrecio = ["html5, 4000", "css3, 5000", "javascript, 10000", "react,7000", "nodejs, 15000"];
let cursosDisponibles = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"];
let cursosAlumno = ["HTML5", "JAVASCRIPT", "NODEJS"];
let nombre = "Gino";
let apellido = "Lencina";

console.log(mostrarUsuario(nombre, apellido, cursosConPrecio, cursosAlumno, montoAPagar));