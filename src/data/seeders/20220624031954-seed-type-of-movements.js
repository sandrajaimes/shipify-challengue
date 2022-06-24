'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('type_of_movements', [{
      name: 'debit',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: 'credit',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('type_of_movements', null, {});
  }
};
