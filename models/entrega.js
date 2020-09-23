'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entrega.init({
    id: {field:"COD_ENTREGA",type:Sequelize.INTEGER,primaryKey:true},
    docEntrega: {field:"DOC_ENTREGA",type:Sequelize.STRING(100)},
    desComentario: {field:"DES_COMENTARIO",type:Sequelize.STRING(100)},
    numNota: {field:"NUM_NOTA",type:Sequelize.DOUBLE},
    dataEntrega: {field:"DAT_ENTREGA",type:Sequelize.DATE}
  }, {
    sequelize,
    modelName: 'TB_ENTREGA',
  });
  return entrega;
};