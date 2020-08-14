'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'machines',
      'explosive_components',
      Sequelize.STRING
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'machines',
      'explosive_components'
    )
  }
};
