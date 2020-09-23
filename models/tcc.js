'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tcc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tcc.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_TCC',
      primaryKey: true
    },
    tema:  {
      type: Sequelize.STRING(100),
      field: 'DES_TEMA'
    }
  }, {
    sequelize,
    modelName: 'TB_TCC',
  });
  return tcc;
};