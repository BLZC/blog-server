/**
 * 文章管理
 */
const Article = require('../sqlConfig/model/article')
const {Op} = require('sequelize')
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
    //根据题目模糊查询
    getArticleByTitle: async title => {
        return Article.findAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`
                }
            }
        })
    },
    // 根据作者查询文章
    getArticleByAuthor: async author => {
        return Article.findAll({
            where: {
                author: author,
            },
            order: [['id', 'DESC']]
        })
    },
    // 新增文章
    addArticle: async article => {
        return Article.create(article);
    },
    //删除文章
    deleteArticle: async id => {
        let article = await Article.findAll({
            where: {
                id: id
            }
        })
        if (Len(article)) {
            Article.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } else {
            return false
        }
    },
    // 修改文章
    updateArticle: async options => {
        let _id = options.id;
        let article = await Article.findAll({
            where: {
                id: _id
            }
        })
        if (Len(article)) {
            Article.update(options, {
                where: {
                    id: _id
                }
            })
            return true;
        } else {
            return false
        }
    }
}


