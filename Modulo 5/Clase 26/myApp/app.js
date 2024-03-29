const express = require('express');
const path = require('path')

const mainRoutes = require('./routes/main')

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', mainRoutes);

app.listen(3000, () => {
  console.log('El servidor esta iniciado en http://localhost:3000');
});
