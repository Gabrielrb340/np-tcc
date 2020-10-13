const db = require('../models/index').TB_USUARIO;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')


exports.getUsuarios = async(req, res) => {
    await db.findAll().then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}

exports.postUsuario = async(req, res) => {
    await db.create(req.body).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}