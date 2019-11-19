/**
 * template-server
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const tpRouter = require('./routes/index')
const app = new Koa()
// 解析中间件
app.use(
  bodyParser({
    formLimit: '1mb'
  })
)

tpRouter(app)

app.listen(9001, () => {
  console.log('**********teplate-server running at port 9001***********')
})
