const {Len} = require('../util/api')
const { getAllArticles,
    getArticleById,
    getArticleByGategory,
    addArticle,
    getArticleByTitle,
    deleteArticle,
    updateArticle,
    getArticleByAuthor } = require('../controllers/article')

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
    // 根据作者查询文章
    getArticleByAuthor: async ctx => {
        let options = ctx.params || {};
        let author = options.author || 0;
        let article = await getArticleByAuthor(author);
        ctx.body = {
            code: 1,
            data: article
        }
    },
    // 根据题目模糊查询
    getArticleByTitle: async ctx => {
        let options = ctx.params || {};
        let title = options.title || '';
        let article = await getArticleByTitle(title)
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
    deleteArticle: async ctx => {
        let options = ctx.params;
        let id = options.id || null;
        let result = await deleteArticle(id);
        if (result) {
            ctx.body = {
                code: 1,
                message: '删除成功'
            } 
        } else {
            ctx.body = {
                code: 0,
                message: '删除失败'
            }
        }
    },
    // 修改文章
    updateArticle: async ctx => {
        let options = ctx.request.body;
        let result = await updateArticle(options)
        if (result) {
            ctx.body = {
                code: 1,
                message: '修改成功'
            } 
        } else {
            ctx.body = {
                code: 0,
                message: '修改失败'
            }
        }
    }
}
