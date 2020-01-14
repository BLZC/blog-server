/**
 * 标签模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const Label = sequelize.define('label', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
    },
  index: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  label: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
}
},{
    timestamps: false
});

module.exports = Label