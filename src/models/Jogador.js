const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jogador = sequelize.define('Jogador', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  overall: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // timeId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'Times', // Nome da tabela `Times` que será criada
  //     key: 'id',
  //   }
  // },
}, {
  tableName: 'jogadores',
  timestamps: false,
});

const Time = require('./Time');
Jogador.belongsTo(Time, { foreignKey: 'timeId' });
Time.hasMany(Jogador, { foreignKey: 'timeId' });

module.exports = Jogador;
