'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    usuario.init({
        id: {
            type: sequelize.INTERGE,
            field: "COD_USUARIO",
            primaryKey: true
        },
        email: {
            type: sequelize.STRING(50),
            field: "EMAIL"
        },
        desEmail: {
            type: sequelize.STRING(100),
            field: "DES_EMAIL"
        },
        matricula: {
            type: sequelize.STRING(15),
            field: "MATRICULA"
        },
        nomCurso: {
            type: sequelize.STRING(50),
            field: "NOM_CURSO"
        },
        telefone: {
            type: sequelize.STRING(15),
            field: "TELEFONE"
        },
        desEndereco: {
            type: sequelize.STRING(100),
            field: "DES_ENDERECO"
        },
        senha: {
            type: sequelize.STRING(11),
            field: "SENHA"
        },
        dataNasc: {
            type: sequelize.DATE,
            field: "DATA_NASC"
        },
        sexo: {
            type: sequelize.BOOLEAN,
            field: "SEXO"
        }
    }, {
        sequelize,
        modelName: 'usuario',
    });
    return usuario;
};