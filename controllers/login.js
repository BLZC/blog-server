const { query } = require('../data/pool')
/**
 * 登录模块
 */
exports.login = async ctx => {
  let options = ctx.request.body
  let _sql = `
    SELECT * from users
      where password="${options.password}" and account="${options.account}"
      limit 1`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    result = result[0]
    status = 1
    message = '登陆成功！'
  } else {
    result = null
    status = 0
    message = '登陆失败!'
  }
  ctx.body = { status, message, ...result }
}
