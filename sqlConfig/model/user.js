/**
 * 用户模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    username: Sequelize.STRING(100),
    account: Sequelize.STRING(100),
    password: Sequelize.STRING(10),
    touxiang: Sequelize.STRING(100)
},{
    timestamps: false
});

module.exports = User