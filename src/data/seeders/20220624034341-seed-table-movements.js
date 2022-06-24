'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('movements', [{
      amount: 50,
      type_of_movement_id: 1,
      client_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        amount: 50,
        type_of_movement_id: 2,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 50,
        type_of_movement_id: 2,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 50,
        type_of_movement_id: 2,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 50,
        type_of_movement_id: 2,
        client_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movements', null, {});
  }
};
