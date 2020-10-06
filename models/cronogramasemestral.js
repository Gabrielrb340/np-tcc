'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cronogramaSemestral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cronogramaSemestral.init({
    codCursoFaseTcc: {field:"COD_CURSO_FASE_TCC",type:Sequelize.INTEGER,primaryKey:true},
    desSemestre: {field:"DES_SEMESTRE",type:Sequelize.STRING(5)},
    dtaInicio: {field:"DTA_INICIO",type:Sequelize.DATE},
    dtaFim: {field:"DTA_FIM",type:Sequelize.DATE}
  }, {
    sequelize,
    modelName: 'CronogramaSemestral',
    freezeTableName: true

  });
  return cronogramaSemestral;
};