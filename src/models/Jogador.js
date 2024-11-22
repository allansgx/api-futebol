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

const Time = require('./Time');
Jogador.belongsTo(Time, { foreignKey: 'timeId' });
Time.hasMany(Jogador, { foreignKey: 'timeId' });

const Pais = require('./Pais');
Jogador.belongsTo(Pais, { foreignKey: 'paisId' });
Pais.hasMany(Jogador, { foreignKey: 'paisId' });

module.exports = Jogador;
