const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Time = require('./Time');
const Pais = require('./Pais');

const Jogador = sequelize.define('Jogador', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  overall: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  posicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Time',
      key: 'id',
    }
  },
  paisId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pais',
      key: 'id',
    }
  }
}, {
  tableName: 'jogadores',
  timestamps: false,
});

Jogador.belongsTo(Time, { foreignKey: 'timeId', as: 'time' });
Time.hasMany(Jogador, { foreignKey: 'timeId', as: 'jogadores' });

Jogador.belongsTo(Pais, { foreignKey: 'paisId', as:'pais' });
Pais.hasMany(Jogador, { foreignKey: 'paisId', as: 'jogadores' });

module.exports = Jogador;
