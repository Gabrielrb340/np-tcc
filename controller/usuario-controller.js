const db = require('../models/index').Usuario;
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

exports.deleteUsuario = async(req, res) =>{
    console.log(" ------ id: ", req.params.id)
    await db.destroy({where:{id:req.params.id}}).then(result =>{
        res.sendStatus(200)
    }).catch(erro => {
        console.log(erro)
        return new Error("Falha ao Excluir Usuário")
    })
}