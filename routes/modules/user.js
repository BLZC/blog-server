/**
 * 用户管理模块
 */
const user = require('koa-router')()
const userManage = require('../../server/user')
/**
 * 获取所有用户
 */
user.get('/users', userManage.getAllUsers)
/**
 *  登录
 */
user.post('/login', userManage.Login)


module.exports = user
