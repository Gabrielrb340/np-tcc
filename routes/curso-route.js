var express = require('express');
const userController = require('../controller/curso-controller')
var router = express.Router();

router.post('/',userController.insertCurso);
router.delete('/:id', userController.deleteCurso);
module.exports = router;
