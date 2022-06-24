'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      bank_account_creation_date: "2022-01-24 14:29:10",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'Stephanie',
        lastName: 'Miles',
        email: 'Stephanie.Miles@example.com',
        bank_account_creation_date: "2020-01-24 14:29:10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Cory',
        lastName: 'Williams',
        email: 'Cory.Williams@example.com',
        bank_account_creation_date: "2021-01-24 14:29:10",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('client', null, {});
  }
};
