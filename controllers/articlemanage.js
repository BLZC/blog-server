const { query } = require('../data/pool')
/**
 * api管理系统blog文章管理模块
 */

//获取文章分类
exports.getclassification = async ctx => {
  let options = ctx.request.body
  let _sql = `
    SELECT * from classification`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    status = 1
    message = '查询成功！'
  } else {
    result = null
    status = 0
    message = '查询失败!'
  }
  ctx.body = { status, message, result }
}

//查找所有文章
exports.getallarticles = async ctx => {
  let options = ctx.request.body
  let _sql
  if (options.classificationId && parseInt(options.classificationId) > 0) {
    _sql = `SELECT * FROM articles WHERE belong = ${parseInt(
      options.classificationId
    )}`
  } else {
    _sql = `SELECT * FROM articles`
  }
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    status = 1
    message = '查询成功！'
  } else {
    result = null
    status = 0
    message = '查询失败!'
  }
  ctx.body = { status, message, result }
}

//新增文章
exports.addarticle = async ctx => {
  let options = ctx.request.body
  let _sql = `
      SELECT * FROM articles WHERE title = "${options.title}"`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    status = 0
    message = '文章题目已存在！'
  } else {
    _sql = `INSERT INTO articles (title, author, time, belong, content) VALUES ("${options.title}", "${options.author}", "${options.time}", "${options.belong}", "${options.content}")`
    result = await query(_sql)
    message = '添加成功!'
    status = 1
  }
  ctx.body = { status, message, result }
}

//获取文章详情
exports.getarticleDetail = async ctx => {
  let options = ctx.request.body
  let _sql = `
        SELECT * FROM articles WHERE id = "${options.id}"`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (Array.isArray(result) && result.length > 0) {
    // console.log(result)
    result = result[0]
    status = 1
    message = '查询成功！'
  } else {
    message = '查询失败!'
    status = 0
  }
  ctx.body = { status, message, result }
}

//编辑用户信息
exports.apiusersedit = async ctx => {
  let options = ctx.request.body
  console.log(options)
  let _sql = `
          UPDATE use2 SET name = "${options.name}", age = "${options.age}", sex = "${options.sex}",
          birth = "${options.birth}", address = "${options.address}" WHERE id = "${options.id}"`
  let result = await query(_sql)
  console.log(result)
  let message = ''
  let status = 0
  if (result) {
    status = 1
    message = '修改成功！'
  } else {
    message = '修改失败!'
    status = 0
  }
  ctx.body = { status, message, result }
}

//删除用户信息
exports.apiusersdelete = async ctx => {
  let options = ctx.request.body
  let _sql = `
        DELETE FROM use2 
           WHERE id in (${options.ids})`
  let result = await query(_sql)
  let message = ''
  let status = 0
  if (result) {
    status = 1
    message = '删除成功！'
  } else {
    message = '删除失败!'
    status = 0
  }
  ctx.body = { status, message, result }
}
