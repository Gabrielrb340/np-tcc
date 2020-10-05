var express = require('express');
const userController = require('../controller/usuario-controller')
var router = express.Router();

router.get('/',userController.getUsuarios);
// router.get('/:id',userController.getUsuarioTestPorPk);
// router.put('/:id',userController.updateUsuarioTeste);
// router.delete('/:id',userController.deleteUsuarioTestePorId);
// router.post('/',userController.insertUsuarioTeste);
router.post('/',userController.insertUsuario);
module.exports = router;