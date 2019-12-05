const {Len} = require('../util/api')
const { getAllArticles,
    getArticleById,
    getArticleByGategory,
    addArticle,
    getArticleByTitle,
    deleteArticle,
    updateArticle,
    getArticleByAuthor } = require('../controllers/article')
const fs = require('fs')
const markdownpdf = require("markdown-pdf");
const send = require('koa-send');
// const path = require('path');
// const pdf = require('pdf-poppler');
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
    },
    // 将md转化为pdf
    transformPdf: async ctx => {
        let _markdownMd = ctx.request.body.markdownMd,
            _articleName = ctx.request.body.articleName,
            pathIndex = new Date().getTime(),
            articleName = _articleName + '-' + pathIndex,
            toPath = process.cwd() + "/static/pdf/" + articleName + ".pdf";
        let options = {
            cssPath: __dirname+'/css/pdf.css'
        }
        try {
            await markdownpdf(options).from.string(_markdownMd).to(toPath, function (err) {
                console.log(articleName+"保存成功！")
            })
        } catch (error) {
            console.log(error)
        }
        ctx.body = {
            code: 1,
            articleName: articleName
        }
    },

    // pdf下载
    fileLoad: async ctx => {
        let _articleName = ctx.params.articleName;
        let path = "/static/pdf/" + _articleName
        console.log('下载了'+_articleName)
        ctx.attachment(path);
        await send(ctx, path);
    },

    /**
     * pdf2img
     *  params: {fileName： 需要转的文件名}
     */
    // pdf2img: async ctx => {
    //     let options = ctx.params || {};
    //     let file = __dirname + '/static/'+options.fileName+'.pdf';
    //     let opts = {
    //         format: 'jpeg',
    //         out_dir: path.dirname(file),
    //         out_prefix: path.basename(file, path.extname(file)),
    //         page: null
    //     }
    //     // 打印pdf文件信息
    //     pdf.info(file)
    //     .then(pdfinfo => {
    //         console.log(pdfinfo);
    //     });
    //     // pdf转image
    //     pdf.convert(file, opts)
    //         .then(res => {
    //             console.log(res)
    //             console.log('Successfully converted');
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    //     ctx.body = {
    //         code: 1,
    //         data: {
    //             message: 'success'
    //         }
    //     }
    // }
}
