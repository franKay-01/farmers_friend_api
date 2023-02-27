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
      this.belongsTo(Users, {foreignKey: 'userId', as: 'users'})
    }

    toJSON(){
      return {...this.get(), id: undefined, userId: undefined}
    }
  }
  AnimalInfo.init({
    animalType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY
    },
    cageNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    referenceNo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    characteristics: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'animalInfo',
    modelName: 'AnimalInfo',
  });
  return AnimalInfo;
};