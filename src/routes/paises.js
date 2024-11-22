const express = require('express');
const router = express.Router();
const Pais = require('../models/Pais');
const { INTERNAL_SERVER_ERROR } = require('../constants/httpStatus');
const { INTERNAL_ERROR } = require('../constants/messages');
const Time = require('../models/Time');

router.get('/', async (req, res) => {
  try {
    const paises = await Pais.findAll({
      include: [
        {
          model: Time, // Modelo relacionado
          as: 'times', // Alias definido no relacionamento
        },
      ],
    })
    res.json(paises);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send({ message : error.message });
  }
});

module.exports = router;