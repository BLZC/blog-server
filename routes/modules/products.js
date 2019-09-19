/**
 * 文章管理模块
 */
const router = require('koa-router')()
const products = require('../../controllers/shop/products')
/**
 * 获取所有商品信息
 */
router.post('/getproducts', products.getproducts)
module.exports = router
