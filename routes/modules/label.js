/**
 * 标签管理模块
 */
const Router = require('koa-router')
const label = new Router()
const apilabel = new Router()
const labelManage = require('../../server/label')
/**
 * 获取所有标签
 */
label.get('/label', labelManage.getAllLabels)

// 新增
label.post('/addLabel', labelManage.addLabel)

//编辑
label.put('/updateLabel', labelManage.updateLabel)

// 删除



apilabel.use('/api', label.routes(), label.allowedMethods())

module.exports = apilabel
