/**
 * 歌曲表模型
 */
const Sequelize = require('sequelize');
const sequelize = require('../config')

const Music = sequelize.define('music', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100)
    },
    artist: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    time: Sequelize.STRING(10),
    src: Sequelize.STRING(100),
    pic: Sequelize.STRING(100),
},{
    timestamps: false
});

module.exports = Music