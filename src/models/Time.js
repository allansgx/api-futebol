const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Time = sequelize.define('Time', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paisId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'paises',
      key: 'id',
    }
  }
}, {
  tableName: 'times',
  timestamps: false,
});

const Pais = require('./Pais');
Time.belongsTo(Pais, { foreignKey: 'paisId' });
Pais.hasMany(Time, { foreignKey: 'paisId' });

module.exports = Time;
