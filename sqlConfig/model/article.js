/**
 * 文章表模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const Article = sequelize.define('article', {
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
    author: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    time: Sequelize.STRING(10),
    belong: Sequelize.STRING(100),
    content: Sequelize.TEXT(0),
    zan: Sequelize.STRING(10),
    pinglun: Sequelize.STRING(10),
    zhaiyao: Sequelize.STRING(100),
},{
    timestamps: false
});

module.exports = Article