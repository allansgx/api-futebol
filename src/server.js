const express = require('express');
const routes = require('./routes')
const cors = require('cors');

// Middleware para lidar com JSON
const app = express();
app.use(express.json());

// Liberar todas as origens
app.use(cors());

// Registrar as rotas
app.use('/api', routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});