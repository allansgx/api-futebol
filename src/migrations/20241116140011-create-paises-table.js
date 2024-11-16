'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('paises',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          nome: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          foto: {
            type: Sequelize.STRING,
            allowNull: false,
          }
        }
      )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('paises');
  }
};
