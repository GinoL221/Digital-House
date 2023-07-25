/*
1. En la carpeta raíz del proyecto, crear un nuevo archivo (extra.js).
2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
3. Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
los recursos aprendidos en esta clase: Destructuring y Spread operator.
4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando los atributos:
    a. nombre
    b. tipo de mascota (Perro - Gato)
    c. color
    d. raza
*/

let array = [5, 3, 87, 2, 9, 4, 10, 3, 98, 11];

let [num0, , num2, , num3] = array

let objeto = { nombre: "Michifus", tipo: "Gato", color: "Gris", raza: "Sin raza" };
let { nombre, tipo, color, raza } = objeto;
console.log(`nombre: ${nombre}, tipo: ${tipo}, color: ${color}, raza: ${raza}`);