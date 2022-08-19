

const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const { engine } = require('express-handlebars')
const routesProductos = require('./routes/routerProductos');

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración a Motores de Plantillas


app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');




//Rutas
app.use('/api/productos', routesProductos);

app.get('./views/index', (req, res) => {
    res.send(`Bienvenido a la App Producto`)
});

app.listen(PORT, () => {
    console.log(`App trabajando en el Puerto ${PORT}`);
})

