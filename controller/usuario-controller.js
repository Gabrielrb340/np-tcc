const db = require('../models/index').TB_USUARIO;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');


exports.getUsuarios = async(req, res) => {
    await db.findAll().then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}

exports.postUsuario = async(req, res) => {
    const { body } = req;
    const salt = bcrypt.genSaltSync();
    const cryptoSenha = bcrypt.hashSync(body.senha, salt);
    db.create({
        email: body.email,
        desEmail: body.desEmail,
        matricula: body.matricula,
        nomCurso: body.nomCurso,
        telefone: body.telefone,
        desEndereco: body.desEndereco,
        senha: cryptoSenha,
        dataNasc: body.dataNasc,
        sexo: body.sexo,
        data_criacao: Date.now(),
        data_modificacao: Date.now()
    }).then(
        res.send({ mensagem: 'Inserido com sucesso'})
    ).catch(
        err => {
            res.status(500).send({
                mensagem: 'Ouve um erro ao tentar inserir esse usuario de teste no banco de dados. >' + err,
                error: true
            })
        }
    )
}