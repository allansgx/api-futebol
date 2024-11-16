'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('times',
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
          },
          paisId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'paises',
              key: 'id',
            },
            onUpdate: 'CASCADE', // Se o id do país for alterado, também atualize o paisId no time
          }
        }
      )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('times');
  }
};
