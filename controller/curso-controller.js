const db = require('../models/index').TB_CURSO;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const curso = require('../models/curso')


exports.insertCurso = async(req, res) => {
    await db.create(req.body).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}

exports.deleteCurso = async(req, res) =>{
    console.log(" ------ id: ", req.params.id)
    await db.destroy({where:{id:req.params.id}}).then(result =>{
        res.sendStatus(200)
    }).catch(erro => {
        console.log(erro)
        return new Error("Falha ao Excluir Curso")
    })
}