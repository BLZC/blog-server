/**
 * 资源管理模块
 */
const Router = require('koa-router')
const resource = new Router()
const apiresource = new Router()
const resourceManage = require('../../server/resource')
/**
 * 资源上传
 */
resource.post('/upload', resourceManage.addResource)

/**
 * 查询所有资源
 */
resource.get('/getAllResources', resourceManage.getAllResources)

// 删除资源
resource.delete('/deleteResource/:id', resourceManage.deleteResource)

apiresource.use('/api', resource.routes(), resource.allowedMethods())

module.exports = apiresource
