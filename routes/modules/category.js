/**
 * 用户管理模块
 */
const router = require('koa-router')()
const categoryManage = require('../../server/category')

// 获取所有分类
router.get('/categories', categoryManage.getAllCategorys)


module.exports = router
