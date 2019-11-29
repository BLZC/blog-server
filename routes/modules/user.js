/**
 * 用户管理模块
 */
const Router = require('koa-router')
const user = new Router()
const apiuser = new Router()
const userManage = require('../../server/user')
/**
 * 获取所有用户
 */
user.get('/users', userManage.getAllUsers)
/**
 *  登录
 */
user.post('/login', userManage.Login)

apiuser.use('/api', user.routes(), user.allowedMethods())

module.exports = apiuser
