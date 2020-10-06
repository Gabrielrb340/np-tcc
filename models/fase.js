'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fase.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_FASE',
      primaryKey: true
    },
    fase: {
      type: Sequelize.STRING(100),
      field: 'DES_FASE_TCC'
    }
  }, {
    sequelize,
    modelName: 'Fase',
    freezeTableName: true

  });
  return fase;
};

