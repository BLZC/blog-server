/**
 * 用户管理模块
 */
const router = require('koa-router')()
const userManage = require('../../server/user')
/**
 * 获取所有用户
 */
router.get('/users', userManage.getAllUsers)
/**
 *  登录
 */
router.post('/login', userManage.Login)


module.exports = router
