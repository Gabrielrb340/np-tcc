const db = require('../models/index').TB_USUARIO;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')


exports.getUsuarios = async(req, res) => {
    await db.findAll().then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}