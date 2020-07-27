'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Machines', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      override: {
        type: Sequelize.STRING,
        allowNull: false
      },
      machine_class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      machine_sites: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weakness: {
        type: Sequelize.STRING,
        allowNull: false
      },
      strength: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weak_points: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Machines');
  }
};
