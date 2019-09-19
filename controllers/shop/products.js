const { query } = require('../../data/pool')
/**
 * 商城管理--->商品管理
 */

//查找所有用户
exports.getproducts = async ctx => {
  let options = ctx.request.body
  let _sql = `
    SELECT * from products`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    // console.log(result)
    // result = result[0]
    status = 1
    message = '查询成功！'
  } else {
    result = null
    status = 0
    message = '查询失败!'
  }
  ctx.body = { status, message, result }
}
