'use strict';
const jogadorFactory = require('../factories/jogadorFactory');
const Pais = require('../models/Pais');
const Time = require('../models/Time');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const times = await Time.findAll()
    const jogadoresAdicionar = []

    times.forEach((time) => {
      const jogadoresTime = Array.from({ length: 15 }).map(() => {
        return jogadorFactory(time.id, time.paisId);
      })
      jogadoresAdicionar.push(...jogadoresTime)
    });

    await queryInterface.bulkInsert('jogadores', jogadoresAdicionar);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jogadores', null);
  }
};
