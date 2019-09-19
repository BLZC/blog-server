const Koa = require('koa')
const router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
// 解析中间件
app.use(
  bodyParser({
    formLimit: '1mb'
  })
)
/**
 * 登陆注册模块
 */
app.use(require('./routes/routes').routes())
/**
 * 用户管理模块
 */
app.use(require('./routes/modules/apiusers').routes())
/**
 * 文章管理模块
 */
app.use(require('./routes/modules/apiarticle').routes())

/**
 * 商品管理模块
 */
app.use(require('./routes/modules/products').routes())

app.listen(9001, () => {
  console.log('**********Running at port 9001***********')
})
