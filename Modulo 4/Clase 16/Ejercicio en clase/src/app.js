// traer express
const express = require("express");
//crear una instancia de express
const app = express();

const path = require("path");
const users = require("./database/data.json");

//Defino la ruta de mis archivos publicos
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//Puerto en el que corre el servidor
app.listen(3001, () => {
  console.log("El servidor esta corriendo en http://localhost:3001/");
});

//crear una ruta por GET
//app.get(direccion de recurso) y una funcion de cb
//toda ruta recibe dos parametros request (req) y response (res)
//por req vienen "variables" desde el front (navegador)
//por res --> se responde lo que se quier devolver al usuario
app.get("/", (req, res) => {
  res.send("Hola mundo desde express");
});

app.get("/user", (req, res) => {
  res.send({
    status: "bad request",
    message: "No existe este recurso",
  });
});

app.get("/users", (req, res) => {
  res.send({
    status: "OK",
    data: users,
  });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/index", (erq, res) => {
  res.sendFile(path.join(__dirname, "./html/index.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/contacto.html"));
});
