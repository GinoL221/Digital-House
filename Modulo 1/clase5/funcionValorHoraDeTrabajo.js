let valorHoraDeTrabajo = (salarioMensual, diasTrabajados, horasPorDia) => (salarioMensual / diasTrabajados) / horasPorDia;

let salario = 20000;
let dias = 20;
let horas = 5;

console.log(valorHoraDeTrabajo(salario, dias, horas));