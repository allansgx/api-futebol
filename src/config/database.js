const { Sequelize } = require('sequelize');

// Configuração do Sequelize para conectar ao MySQL
const sequelize = new Sequelize('futebol', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desative logs SQL no console (opcional)
});

// Teste a conexão
sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MySQL:', error));

module.exports = sequelize;
