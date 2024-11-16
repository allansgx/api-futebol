const express = require('express');
const Time = require('../models/Time');
const { INTERNAL_SERVER_ERROR } = require('../constants/httpStatus');
const { INTERNAL_ERROR } = require('../constants/messages');
const router = express.Router();

// Rota para listar todos os times
router.get('/', async (req, res) => {
  try {
    const times = await Time.findAll()
    res.json(times);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL_ERROR });
  }
});

module.exports = router;