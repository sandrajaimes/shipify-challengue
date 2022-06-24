'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'Stephanie',
        lastName: 'Miles',
        email: 'Stephanie.Miles@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Cory',
        lastName: 'Williams',
        email: 'Cory.Williams@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('client', null, {});
  }
};
