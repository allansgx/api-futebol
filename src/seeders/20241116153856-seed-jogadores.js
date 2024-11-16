'use strict';
const jogadorFactory = require('../factories/jogadorFactory');
const Pais = require('../models/Pais');
const Time = require('../models/Time');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const paisBrasil = await Pais.findOne({ where: { nome: 'Brasil' }})
    const paisEspanha = await Pais.findOne({ where: { nome: 'Espanha' }})

    const timeAvai = await Time.findOne({ where: { nome: 'Avaí' }})
    const timeRealMadrid = await Time.findOne({ where: { nome: 'Real Madrid' }})

    const jogadoresAvai = Array.from({ length: 15 }).map(() => {
      return jogadorFactory(timeAvai.id, paisBrasil.id);
    });

    const jogadoresRealMadrid = Array.from({ length: 15 }).map(() => {
      return jogadorFactory(timeRealMadrid.id, paisEspanha.id);
    });

    await queryInterface.bulkInsert('jogadores', [
      ...jogadoresAvai,
      ...jogadoresRealMadrid
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jogadores', null);
  }
};
