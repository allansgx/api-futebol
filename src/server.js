const sequelize = require('./config/database');
const express = require('express');
const jogadoresRoutes = require('./routes/jogadores')

// Sincronize todos os modelos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados MySQL.');
  })
  .catch(error => console.error('Erro ao sincronizar modelos:', error));


const app = express();
app.use(express.json()); // Permite o envio de JSON no corpo das requisições

app.use('/', jogadoresRoutes);

const PORT = process.env.PORT || 3000; // Verifique se está definida aqui

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});