/**
 * 用户管理模块
 */
const Router = require('koa-router')
const apiCategory = new Router()
const category = new Router()
const categoryManage = require('../../server/category')

// 获取所有分类
category.get('/categories', categoryManage.getAllCategorys)

apiCategory.use('/api', category.routes(), category.allowedMethods())
module.exports = apiCategory
