'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commission_client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commission: {
        type: Sequelize.INTEGER,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "client",
          key: "id"
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('commission_client');
  }
};
