function valorHoraDeTrabajo(salarioMensual, diasTrabajados, horasPorDia) {
    let valorDelDia = (salarioMensual / diasTrabajados);
    return valorDelDia / horasPorDia;
}
let salario = 20000;
let dias = 20;
let horas = 5;

console.log(valorHoraDeTrabajo(salario, dias, horas));