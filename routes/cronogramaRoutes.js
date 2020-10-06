var express = require('express');
const cronogramaController = require('../controller/cronograma-controller')
var router = express.Router();

router.post('/', cronogramaController.createCronograma);


module.exports = router