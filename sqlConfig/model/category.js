/**
 * 文章类别模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100)
},{
    timestamps: false
});

module.exports = Category