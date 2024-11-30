const express = require('express');
const router = express.Router();
const Jogador = require('../models/Jogador');
const verificarModel = require('../helpers/verificacoesApi');

// Listar todos os jogadores
router.get('/', async (req, res) => {
    try {
        const jogadores = await Jogador.findAll({
            order: [['overall', 'desc']]
        })
        res.json(jogadores)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar jogadores' })
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
        const { nome, posicao, overall } = req.body;

        if (!nome || nome.trim() === '') {
            return res.status(400).json({ message: 'O campo nome é obrigatório.' });
        }

        if (!posicao || posicao.length < 2 || posicao.length > 3) {
            return res.status(400).json({ message: 'O campo posição é obrigatório.' });
        }

        if (!overall || overall.length > 3) {
            return res.status(400).json({ message: 'O campo overall é obrigatório.' });
        }

        if (overall > 100) {
            return res.status(400).json({ message: 'O campo overall não pode ser maior que 100.' });
        }

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
