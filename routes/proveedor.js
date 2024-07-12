const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// creamos las turas del crud

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.mostrarProveedores);
router.get('/:id', proveedorController.buscarProveedor);
//router.put('/:id', proveedorController.actualizarProvedores);
router.patch('/:id', proveedorController.modificarProveedores);
router.delete('/:id', proveedorController.eliminarProveedores);


module.exports = router;