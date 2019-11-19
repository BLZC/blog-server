/**
 * 文章管理
 */
const Article = require('../sqlConfig/model/article')
const {Len} = require('../util/api')
module.exports = {
    // 查询所有文章
    getAllArticles: async () => {
        return Article.findAll({
            attributes: ['id', 'title', 'author', 'time', 'belong', 'content', 'zan', 'pinglun', 'zhaiyao'],
            order: [['id', 'DESC']]
        })
    },
    // 根据id查找某篇文章
    getArticleById: async id => {
        let result;
        await Article.findAll({
            where: {
                id: id
            }
        }).then(res => {
             result = res;   
        })
        if (Len(result)) {
            return result;
        } else {
            return '该文章不存在'
        }
    },
    // 根据类别查询文章
    getArticleByGategory: async category => {
        return Article.findAll({
            where: {
                belong: category
            }
        })
    },
    // 新增文章
    addArticle: async article => {
        return Article.create(article);
    }
}


