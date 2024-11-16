'use strict';
const Pais = require('../models/Pais');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const paisBrasil = await Pais.findOne({ where: { nome: 'Brasil' }})
    const paisEspanha = await Pais.findOne({ where: { nome: 'Espanha' }})
  
    await queryInterface.bulkInsert('times', [
      {
        nome: 'Avaí',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Avai_FC_%2805-E%29_-_SC.svg/1200px-Avai_FC_%2805-E%29_-_SC.svg.png',
        paisId: paisBrasil.id
      },
      {
        nome: 'Real Madrid',
        foto: 'https://logopng.com.br/logos/real-madrid-174.png',
        paisId: paisEspanha.id
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('times', {
      nome: {
        [Sequelize.Op.or]: ['Avaí', 'Real Madrid'],
      }
   });
  }
};
