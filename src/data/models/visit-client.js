'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VisitClient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    VisitClient.init({
        client_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'VisitClient',
        tableName: 'visit_client'
    });
    return VisitClient;
};
