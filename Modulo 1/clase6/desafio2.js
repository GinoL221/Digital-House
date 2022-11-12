function laMasVista(listaPeliculas, pelicula) {
    let pos = listaPeliculas.indexOf(pelicula);
    listaPeliculas.splice(pos, 1);
    listaPeliculas.unshift(pelicula.toUpperCase());
    return listaPeliculas.join(" , ");
}

function concatenar(listaPeliculas, proximasPeliculas) {
    return listaPeliculas + " , " + proximasPeliculas;
}

let listaPeliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];
console.log(laMasVista(listaPeliculas, "Thor: amor y trueno"));

let proximasPeliculas = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];
proximasPeliculas = proximasPeliculas.join(" , ");
console.log(proximasPeliculas);

proximasPeliculas = proximasPeliculas.replace("Counter-Strike , ", "");
console.log(proximasPeliculas);

console.log(concatenar(listaPeliculas.join(" , "), proximasPeliculas));
