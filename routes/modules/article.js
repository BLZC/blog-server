/**
 * 文章管理模块
 */
const router = require('koa-router')()
const articleManage = require('../../server/article')
/**
 * 获取所有文章
 */
router.get('/articles', articleManage.getAllArticles)
/**
 *  根据id查询文章
 */
router.get('/article/:id', articleManage.getArticleById)

// 根据类别查询文章
router.get('/articleByGategory/:category', articleManage.getArticleByGategory)

// 新增文章
router.post('/addArticle', articleManage.addArticle)
module.exports = router