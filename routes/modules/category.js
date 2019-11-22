/**
 * 用户管理模块
 */
const category = require('koa-router')()
const categoryManage = require('../../server/category')

// 获取所有分类
category.get('/categories', categoryManage.getAllCategorys)


module.exports = category
