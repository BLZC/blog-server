/**
 * 用户管理模块
 */
const router = require('koa-router')()
const apiusers = require('../../controllers/apiusers')
/**
 * 获取所有用户信息
 */
router.post('/getusers', apiusers.apiusers)
/**
 * 新增用户
 */
router.post('/apiusersadd', apiusers.apiusersadd)
/**
 * 删除用户
 */
router.post('/apiusersdelete', apiusers.apiusersdelete)
/**
 * 编辑用户
 */
router.post('/apiusersedit', apiusers.apiusersedit)
/**
 * 查看单个用户详细信息
 */
router.post('/getuserDetail', apiusers.getuserDetail)

module.exports = router
