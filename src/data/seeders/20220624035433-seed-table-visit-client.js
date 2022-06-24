'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('visit_client', [{
      client_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('visit_client', null, {});
  }
};
