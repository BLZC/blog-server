/**
 * 资源管理
 */
const Resource = require('../sqlConfig/model/resource')
const {Op} = require('sequelize')
const {Len} = require('../util/api')
module.exports = {
    // 查询所有资源
    getAllResources: async () => {
        return Resource.findAll({
            attributes: ['id', 'title', 'author', 'time', 'type', 'size'],
            order: [['id', 'DESC']]
        })
    },
    // 根据id查找资源
    getResourceById: async id => {
        let result;
        await Resource.findAll({
            where: {
                id: id
            }
        }).then(res => {
             result = res;   
        })
        if (Len(result)) {
            return result;
        } else {
            return '该资源不存在'
        }
    },
    //根据题目模糊查询
    getResourceByTitle: async title => {
        return Resource.findAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`
                }
            }
        })
    },
    // 根据作者查询资源
    getResourceByAuthor: async author => {
        return Article.findAll({
            where: {
                author: author,
            },
            order: [['id', 'DESC']]
        })
    },
    // 添加资源上传信息
    addResource: async smabout => {
        return Resource.create(smabout);
    },
    //删除文章
    deleteResource: async id => {
        let resource = await Resource.findAll({
            where: {
                id: id
            }
        })
        if (Len(resource)) {
          Resource.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } else {
            return false
        }
    }
}


