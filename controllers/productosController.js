
/*
const knex = require('../db/conexion');

const formularioProducto = (req, res) => {
    res.send(`Te envío el Formulario para que lo completes`)
}

const selectProducto = (req, res) => {
    knex.select('../views/formularioProducto.hbs')
    .from('productos')
    .then((response) => {
        for (row of response) {
            console.log(`${row['nombre']} - ${row['descripcion']}`);            
        }
        res.send(`Te muestro los productos`)
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}

const crearProducto = (req, res) => {
    res.send(`Producto Creado`)
}

module.exports = {
    formularioProducto,
    selectProducto,
    crearProducto
} 
*/
