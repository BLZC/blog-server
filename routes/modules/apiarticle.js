/**
 * 文章管理模块
 */
const router = require('koa-router')()
const articlemanage = require('../../controllers/articlemanage')
/**
 * 获取文章分类
 */
router.post('/getclassification', articlemanage.getclassification)
/**
 * 获取所有文章
 */
router.post('/getallarticles', articlemanage.getallarticles)
/**
 * 写文章
 */
router.post('/addarticle', articlemanage.addarticle)
/**
 * 获取文章详情
 */
router.post('/getarticleDetail', articlemanage.getarticleDetail)
module.exports = router
