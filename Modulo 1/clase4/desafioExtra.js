const palabra = "Gato";

switch (palabra.toLowerCase()) {
    case "gato":
        console.log("Cat");
        break;
    case "perro":
        console.log("Dog");
        break;
    case "puerta":
        console.log("Door");
        break;
    case "ventana":
        console.log("Window");
        break;
    case "mesa":
        console.log("Table");
        break
    default:
        console.log("La palabra ingresada es incorrecta")
        break;
}