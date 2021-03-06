const Sequelize = require('sequelize');
/**
 * 数据库配置
 */
const config = {    
    host: '49.235.8.149',
    username: 'lzc',
    password: 'yan521',
    database: 'blog'
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = sequelize