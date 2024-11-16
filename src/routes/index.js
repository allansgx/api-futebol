const express = require('express');
const router = express.Router();

// Importar as rotas
const jogadoresRoutes = require('./jogadores');
const timesRoutes = require('./time');
const paisesRoutes = require('./paises');

// Registrar as rotas com seus respectivos caminhos base
router.use('/jogadores', jogadoresRoutes);
router.use('/times', timesRoutes);
router.use('/paises', paisesRoutes);

module.exports = router;