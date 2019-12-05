/**
 * 资源表模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const Resource = sequelize.define('resource', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    size: Sequelize.STRING(100),
    author: Sequelize.STRING(100),
    time: Sequelize.STRING(10),
    type: Sequelize.STRING(100)
},{
    timestamps: false
});

module.exports = Resource