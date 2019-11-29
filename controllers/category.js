/**
 * 文章类别管理
 */
const Category = require('../sqlConfig/model/category')
const {Len} = require('../util/api')
module.exports = {
    // 查询所有用户
    getAllCategories: async () => {
        return Category.findAll({
            attributes: ['id', 'name']
        })
    }
}


