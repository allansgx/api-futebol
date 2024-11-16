'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('jogadores',
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
          overall: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          foto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          timeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'times',
              key: 'id',
            }
          },
          paisId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'paises',
              key: 'id',
            },
            onUpdate: 'CASCADE', // Se o id do país for alterado, também atualize o paisId no jogador
          }
        }
      )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('jogadores');
  }
};
