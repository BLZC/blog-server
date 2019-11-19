const {Len} = require('../util/api')
const { getAllArticles,
    getArticleById,
    getArticleByGategory,
    addArticle,
    getArticleDetail } = require('../controllers/article')

module.exports = {
    // 获取所有文章
    getAllArticles: async ctx => {
        const articles = await getAllArticles();
        ctx.body = {
            code: 1,
            data: articles
        }
    },
    
    // 根据id查询文章
    getArticleById: async ctx => {
        let options = ctx.params || {};
        let id = options.id || null;
        let article = await getArticleById(id);
        ctx.body = {
            code: 1,
            data: Len(article) ? article[0] : {}
        }
    },

    // 根据类别查询文章
    getArticleByGategory: async ctx => {
        let options = ctx.params || {};
        let category = options.category || 0;
        let article = parseInt(category) == 0 ? await getAllArticles() : await getArticleByGategory(category);
        ctx.body = {
            code: 1,
            data: article
        }
    },

    // 新增文章
    addArticle: async ctx => {
        let options = ctx.request.body;
        await addArticle(options);
        ctx.body = {
            code: 1,
            message: '新增成功'
        }
    },

    //删除文章
}
