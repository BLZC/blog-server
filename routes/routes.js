/**
 * router主模块
 */
const router = require('koa-router')()
const login = require('../controllers/login')
const register = require('../controllers/register')
/**
 * 用户登录
 */
router.post('/login', login.login)
/**
 * 用户注册
 */
router.post('/register', register.register)

module.exports = router
