const express = require('express');
const router = express.Router();
const Jogador = require('../models/Jogador');
const verificarModel = require('../helpers/verificacoesApi');

// Listar todos os jogadores
router.get('/', async (req, res) => {
  try {
    const jogadores = await Jogador.findAll();
    res.json(jogadores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar jogadores' });
  }
});

// Buscar um jogador
router.get('/:id', async (req, res) => {
  try {
    const jogadorId = req.params.id
    const jogador = await Jogador.findByPk(jogadorId);
    
    await verificarModel(jogador, Jogador)

    res.json(jogador);
  } catch (error) {
    res.status(500).json({ error: error.message ?? 'Erro ao buscar jogador' });
  }
});

// Criar um novo jogador
router.post('/', async (req, res) => {
  try {
    const novoJogador = await Jogador.create(req.body);
    res.status(201).json(novoJogador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar jogador' });
  }
});

// Editar um jogador
router.patch('/:id', async (req, res) => {
  try {
    const jogadorId = req.params.id
    const jogador = await Jogador.findByPk(jogadorId).then((jogador) => jogador.update(req.body));
    res.json(jogador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar jogador' });
  }
});

// Deletar um jogador
router.delete('/:id', async (req, res) => {
  try {
    const jogadorId = req.params.id
    await Jogador.findByPk(jogadorId).then((jogador) => jogador.destroy());
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar jogador' });
  }
});

module.exports = router;
