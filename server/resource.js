const {Len} = require('../util/api')
const { getAllResources,
    getResourceById,
    addResource,
    getResourceByTitle,
    deleteResource,
    getResourceByAuthor } = require('../controllers/resource')
const fs = require('fs')
const send = require('koa-send');
module.exports = {
    // 获取所有资源
    getAllResources: async ctx => {
        const resources = await getAllResources();
        ctx.body = {
            code: 1,
            data: resources
        }
    },
    
    // 根据id查询资源
    getResourceById: async ctx => {
        let options = ctx.params || {};
        let id = options.id || null;
        let resource = await getResourceById(id);
        ctx.body = {
            code: 1,
            data: Len(resource) ? resource[0] : {}
        }
    },

    // 根据作者查询资源
    getResourceByAuthor: async ctx => {
        let options = ctx.params || {};
        let author = options.author || 0;
        let resource = await getResourceByAuthor(author);
        ctx.body = {
            code: 1,
            data: resource
        }
    },
    // 根据题目模糊查询
    getResourceByTitle: async ctx => {
        let options = ctx.params || {};
        let title = options.title || '';
        let resource = await getResourceByTitle(title)
        ctx.body = {
            code: 1,
            data: resource
        }
    },
    // 新增资源
  addResource: async ctx => {
        const user = ctx.request.body.user;
        const file = ctx.request.files.file;	// 获取上传文件
        const ext = file.name.split('.').pop();		// 获取上传文件扩展名
        let size = file.size / 1024 > 1024 ? (file.size / 1024 / 1024).toFixed(2) + 'M' : (file.size / 1024).toFixed(2) + 'K';
        let options = {
          title: file.name,
          time: new Date().toLocaleDateString(),
          type: file.type,
          author: user,
          size: size
      }
        const reader = await fs.createReadStream(file.path);	// 创建可读流
        const upStream = await fs.createWriteStream(process.cwd()+`/static/upload/${file.name}`);		// 创建可写流
        await reader.pipe(upStream);	// 可读流通过管道写入可写流
        await addResource(options);
        ctx.body = {
            code: 1,
            message: '上传成功'
        }
    },

    //删除资源
    deleteResource: async ctx => {
        let options = ctx.params;
        let id = options.id || null;
        let result = await deleteResource(id);
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
    }
}
