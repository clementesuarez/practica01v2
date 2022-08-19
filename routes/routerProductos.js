



const { Router } = require('express');
const router = Router();
const { 
    formularioProducto,
    selectProducto,
    crearProducto
} = require('../controllers/productosController')

router.get('/views/index');
router.get('/', formularioProducto); 
router.get('/all', selectProducto);
router.post('/', crearProducto);




module.exports = router;
