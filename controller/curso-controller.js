const db = require('../models/index').Curso;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const curso = require('../models/curso')


exports.insertCurso = async(req, res) => {
    await db.create(req.body).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}