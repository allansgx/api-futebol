const express = require('express');
const router = express.Router();
const Jogador = require('../models/Jogador'); // Importe o modelo de jogador (ajuste o caminho conforme necessário)

// Rota GET para listar todos os jogadores
router.get('/jogadores', async (req, res) => {
  try {
    const jogadores = await Jogador.findAll();
    res.json(jogadores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar jogadores' });
  }
});

// Rota POST para criar um novo jogador
router.post('/jogadores', async (req, res) => {
  try {
    const novoJogador = await Jogador.create(req.body);
    res.status(201).json(novoJogador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar jogador' });
  }
});

// Exporte o roteador para que ele possa ser usado no arquivo principal do servidor
module.exports = router;
