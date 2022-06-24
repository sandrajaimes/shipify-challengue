'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tax', [{
      name: 'IVA',
      value: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: 'commission_client',
        value: 0.01,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'insurance_amount_higher_100',
        value: 0.05,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'services_less_than_4_visits',
        value: 0.02,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'services_more_than_4_visits',
        value: 0.25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tax', null, {});
  }
};
