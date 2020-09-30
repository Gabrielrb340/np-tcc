'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Usuario.init({
        id: {
            type: Sequelize.INTEGER,
            field: "COD_USUARIO",
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING(50),
            field: "EMAIL"
        },
        desEmail: {
            type: Sequelize.STRING(100),
            field: "DES_EMAIL"
        },
        matricula: {
            type: Sequelize.STRING(15),
            field: "MATRICULA"
        },
        nomCurso: {
            type: Sequelize.STRING(50),
            field: "NOM_CURSO"
        },
        telefone: {
            type: Sequelize.STRING(15),
            field: "TELEFONE"
        },
        desEndereco: {
            type: Sequelize.STRING(100),
            field: "DES_ENDERECO"
        },
        senha: {
            type: Sequelize.STRING(11),
            field: "SENHA"
        },
        dataNasc: {
            type: Sequelize.DATE,
            field: "DATA_NASC"
        },
        sexo: {
            type: Sequelize.BOOLEAN,
            field: "SEXO"
        }
    }, {
        sequelize,
        modelName: 'TB_USUARIO',
    });
    return Usuario;
};