const express = require('express');
const router = express.Router();
const Pais = require('../models/Pais');
const { INTERNAL_SERVER_ERROR } = require('../constants/httpStatus');
const { INTERNAL_ERROR } = require('../constants/messages');

router.get('/', async (req, res) => {
  try {
    const paises = await Pais.findAll()
    res.json(paises);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send({ message : INTERNAL_ERROR });
  }
});

module.exports = router;