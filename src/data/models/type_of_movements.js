'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TypeOfMovements extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TypeOfMovements.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'TypeOfMovements',
    });
    return TypeOfMovements;
};
