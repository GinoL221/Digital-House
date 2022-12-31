const express = require('express');
const path = require('path');
const app = express();

//Defino la ruta de mis archivos publicos
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Puerto en el que corre el servidor
app.listen(3000, () => { console.log("El servidor esta corriendo en el puerto 3000"); });

//Definon el home de la pagina
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});