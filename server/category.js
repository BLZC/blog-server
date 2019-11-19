
const { getAllCategories } = require('../controllers/category')

module.exports = {
    getAllCategorys: async ctx => {
        const categorys = await getAllCategories();
        ctx.body = {
            status: 0,
            data: categorys
        }
    }

}
