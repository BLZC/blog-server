const Koa = require('koa')
const tpRouter = require('./routes/index')
const static = require('koa-static')
const koaBody = require('koa-body');
// const jwt = require('koa-jwt')
const app = new Koa()

app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
  }
}));

// app.use(jwt({
//   secret: 'blog'
// }).unless({
//   path: [/\/login/]
// }))

tpRouter(app)

app.use(static(__dirname+'/static'))

app.listen(9001, () => {
  console.log('**********blog-server running at port 9001***********')
})
