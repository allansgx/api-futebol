const express = require('express');
const router = express.Router();
const { INTERNAL_SERVER_ERROR } = require('../constants/httpStatus');
const { INTERNAL_ERROR } = require('../constants/messages');
const verificarModel = require('../helpers/verificacoesApi');

const Time = require('../models/Time');
const Jogador = require('../models/Jogador');
const Pais = require('../models/Pais');

router.get('/', async (req, res) => {
  try {
    const times = await Time.findAll()
    res.json(times);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL_ERROR });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const timeId = req.params.id
    const time = await Time.findByPk(timeId, {
      include: [
        {
          model: Jogador,
          as: 'jogadores',
          include: [{
            model: Pais,
            as: 'pais'
          }]
        },
      ],
      order: [[{ model: Jogador, as: 'jogadores' }, 'overall', 'DESC']]
    })

    await verificarModel(time, Time);
    
    res.json(time)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL_ERROR });
  }
});

module.exports = router;