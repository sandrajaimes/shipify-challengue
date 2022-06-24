'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movements extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Movements.init({
        amount: DataTypes.DECIMAL,
        type_of_movements_id: DataTypes.STRING,
        client_id: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Movements',
    });
    return Movements;
};
