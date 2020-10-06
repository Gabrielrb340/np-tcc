const db = require('../models/index').CronogramaSemestral;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')
exports.createCronograma = async(req, res) => {
    await db.create(req.body).then(r => {
        res.sendStatus(200)
    }).catch(c => { console.log(c + '') })

}