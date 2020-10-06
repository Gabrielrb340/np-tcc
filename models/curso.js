'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  curso.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_CURSO',
      primaryKey: true
    },
    nomcurso: {
      type: Sequelize.STRING(50),
      field: 'NOM_CURSO'
    }
  }, {
    sequelize,
    modelName: 'Curso',
    freezeTableName: true

  },);
  return curso;
};