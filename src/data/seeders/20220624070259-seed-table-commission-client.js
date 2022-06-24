'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('commission_client', [{
      commission: 0,
      client_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        commission: 0,
        client_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('commission_client', null, {});
  }
};
