const { query } = require('../data/pool')
/**
 * 注册模块
 */
exports.register = async ctx => {
  try {
    let options = ctx.request.body
    let _sql = `
          SELECT * from users
            where account="${options.account}" or username="${options.username}"
            limit 1`
    let result = await query(_sql)
    let message = ''
    let status = 0
    if (Array.isArray(result) && result.length > 0) {
      result = null
      status = 0
      message = '您的账号已经被注册'
    } else {
      _sql = `INSERT INTO users (username, account, password) VALUES ("${options.username}", "${options.account}", "${options.password}")`
      result = await query(_sql)
      status = 1
      message = '注册成功！'
    }
    ctx.body = { status, message, ...result }
  } catch (error) {
    console.log(error)
  }
}
