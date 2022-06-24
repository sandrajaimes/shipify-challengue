'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CommissionClient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    CommissionClient.init({
        commission: DataTypes.DECIMAL,
        client_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'CommissionClient',
        tableName: 'commission_client'
    });
    return CommissionClient;
};
