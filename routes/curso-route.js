var express = require('express');
const cursoController = require('../controller/curso-controller')
var router = express.Router();

router.post('/',cursoController.insertCurso);
router.get('/',cursoController.getCursos);
router.delete('/:id', cursoController.deleteCurso);
module.exports = router;
