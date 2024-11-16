'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paises', [
      {
        nome: 'Brasil',
        foto: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg'
      },
      {
        nome: 'Espanha',
        foto: 'https://cdn.awsli.com.br/2500x2500/900/900758/produto/171892750/4e3347ca7c.jpg'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('paises', {
        nome: {
          [Sequelize.Op.or]: ['Brasil', 'Espanha'],
        }
     });
  }
};
