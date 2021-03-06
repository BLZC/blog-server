/**
 * 文章管理模块
 */
// const jwt = require('koa-jwt')
const Router = require('koa-router')
const article = new Router() 
const author = new Router()

const articleManage = require('../../server/article')
// 获取所有文章
article.get('/articles/:limit/:offset', articleManage.getAllArticles)

// 文章模糊查询
article.get('/getArticleBlurry/:limit/:offset/:searchCondition', articleManage.getArticleBlurry)

// 根据id查询文章
article.get('/article/:id', articleManage.getArticleById)

// 根据类别查询文章
article.get('/articleByGategory/:category', articleManage.getArticleByGategory)

//根据题目模糊查询文章
article.get('/getArticleByTitle/:title', articleManage.getArticleByTitle)

// 根据作者查询文章
article.get('/articleByAuthor/:author', articleManage.getArticleByAuthor)

// 新增文章
article.post('/addArticle', articleManage.addArticle)

// 删除文章
article.delete('/deleteArticle/:id', articleManage.deleteArticle)

// 修改文章
article.put('/updateArticle', articleManage.updateArticle)

// 导出为pdf
article.get('/downpdf/:articleName', articleManage.fileLoad)

// pdf2img
// article.get('/pdf2img', articleManage.pdf2img)

// 下载
article.post('/transformPdf', articleManage.transformPdf)

author.use('/api', article.routes(), article.allowedMethods())
module.exports = author