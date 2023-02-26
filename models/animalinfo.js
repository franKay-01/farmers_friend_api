'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnimalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, {foreignKey: 'userId'})
    }
  }
  AnimalInfo.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'animalInfo',
    modelName: 'AnimalInfo',
  });
  return AnimalInfo;
};