const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Time = sequelize.define('Paises', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'paises',
  timestamps: false,
});

module.exports = Time;
