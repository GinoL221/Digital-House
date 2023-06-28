/*
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada:
“sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
- restar- multiplicar- dividir”.
*/

const valor1 = 2;
const valor2 = 2;
const operacion = "restar";
let resultado = 0;

switch (operacion.toLowerCase()) {
    case "sumar":
        resultado = valor1 + valor2;
        console.log("El resultado de sumar " + valor1 + " + " + valor2 + " es " + resultado);
        break;
    case "restar":
        resultado = valor1 - valor2;
        console.log("El resultado de restar " + valor1 + " - " + valor2 + " es " + resultado);
        break;
    case "multiplicar":
        resultado = valor1 * valor2;
        console.log("El resultado de multiplicar " + valor1 + " * " + valor2 + " es " + resultado);
        break;
    case "dividir":
        resultado = valor1 / valor2;
        console.log("El resultado de dividir " + valor1 + " / " + valor2 + " es " + resultado);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar- restar- multiplicar- dividir");
        break;
}
