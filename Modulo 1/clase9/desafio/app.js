const peliculas = require("./proyecto/movies");
console.log(peliculas[1]);

let fs = require("fs")
let message = fs.readFileSync(__dirname + "/proyecto/message.txt", "utf-8");

console.log(message);