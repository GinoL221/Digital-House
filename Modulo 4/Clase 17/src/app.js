// traer express
const express = require('express');
//crear una instancia de express
const app = express();

const path = require('path');

//Defino la ruta de mis archivos publicos
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Puerto en el que corre el servidor
app.listen(3001, () => {
    console.log("El servidor esta corriendo en el puerto 3001");
});

//Defino el home de la pagina
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/home.html'));
// });