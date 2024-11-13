const Jogador = require('../models/Jogador');

// Criar um novo jogador
exports.criarJogador = async (req, res) => {
  try {
    const jogador = new Jogador(req.body);
    await jogador.save();
    res.status(201).json(jogador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar todos os jogadores
exports.listarJogadores = async (req, res) => {
  try {
    const jogadores = await Jogador.find();
    res.json(jogadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar um jogador
exports.atualizarJogador = async (req, res) => {
  try {
    const jogador = await Jogador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(jogador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um jogador
exports.deletarJogador = async (req, res) => {
  try {
    await Jogador.findByIdAndDelete(req.params.id);
    res.json({ message: 'Jogador deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
