// 2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
// permita calcular el monto a pagar por un alumno basándose en los cursos que
// desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
// objetivo:
// a. Crear un array multidimensional que contenga los nombres de los cursos y su
// precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
// 7000”, “nodejs, 15000”.
// b. Crear un array que contenga los cursos que el alumno quiere tomar con DH.
// Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
// HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
// c. Crear una función (Callback) que reciba como parámetros el array
// multidimensional de los cursos y el otro array que indica los cursos que
// quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
// devolver el monto total a pagar por el alumno en función de los cursos que
// quiere realizar. No olvides que en el array multidimensional los nombres de los
// cursos están escritos en letras minúsculas y tienes que pasarlas a MAYÚSCULAS.
// d. Crear otra función que reciba como parámetros el nombre y el apellido del
// alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta
// función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar en función de los cursos que quiere realizar.
// e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados,
// invoca a la segunda función, asigna diferentes valores o argumentos y no
// olvides utilizar el console.log() para mostrar los resultados al usuario. 

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