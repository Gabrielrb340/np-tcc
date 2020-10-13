var express = require('express');
const userController = require('../controller/curso-controller')
var router = express.Router();

router.post('/',userController.insertCurso);
module.exports = router;
