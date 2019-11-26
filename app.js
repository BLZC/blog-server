const Koa = require('koa')
<<<<<<< HEAD
=======
const bodyParser = require('koa-bodyparser')
const tpRouter = require('./routes/index')
const static = require('koa-static')
// const jwt = require('koa-jwt')
>>>>>>> 8ffd4e0... add md -> pdf
const app = new Koa()
let server = app.listen(3000)
// 导入WebSocket模块:
const WebSocket = require('ws')

// 引用Server类:
const WebSocketServer = WebSocket.Server
// const { router } = require('./routes/routes')
// const koaRouter = require('koa-router')
// const router = new koaRouter()
// const koaRouter = require('koa-router')
// const bodyParser = require('koa-bodyparser')
// const cors = require('koa2-cors')
// const Cookies = require('cookies')
// const session = require('koa-session-minimal')
// const MysqlSession = require('koa-mysql-session')
// const path = require('path')
// const fs = require('fs')
// const jsonp = require('koa-jsonp')
// const getSqlContentMap = require('./util/get-sql-content-map')
// const { uploadFile } = require('./util/upload')
// const { createAllTables } = require('./sql')
// 解析中间件
// app.use(bodyParser())
const fetch = require('./proxy/proxy')
// 实例化:
let wss = new WebSocketServer({
  server: server
})

app.use(function*(next) {
  // if ('/weather' === this.path && 'GET' === this.method)
  //   this.body = yield proxy('http://localhost:8087/users')
  if ('/weather' === this.path && 'POST' === this.method)
    this.body = yield fetch(
      'https://api.seniverse.com/v3/weather/now.json?key=S24Z4Njii2Elvwe-q&location=suzhou&language=zh-Hans&unit=c'
    )
  yield next
})

<<<<<<< HEAD
function parseUser(obj) {
  if (!obj) {
    return
  }
  console.log('try parse: ' + obj)
  let s = ''
  if (typeof obj === 'string') {
    s = obj
  } else if (obj.headers) {
    let cookies = new Cookies(obj, null)
    s = cookies.get('name')
  }
  if (s) {
    try {
      let user = JSON.parse(Buffer.from(s, 'base64').toString())
      console.log(`User: ${user.name}, ID: ${user.id}`)
      return user
    } catch (e) {
      // ignore
    }
  }
}
=======
app.use(static(__dirname+'/server/static'))
// app.use(jwt({
//   secret: 'blog'
// }).unless({
//   path: [/\/login/]
// }))
>>>>>>> 8ffd4e0... add md -> pdf

app.use(async (ctx, next) => {
  ctx.state.user = parseUser(ctx.cookies.get('name') || '')
  await next()
})

wss.on('connection', function(ws) {
  console.log('已连接。。。。。。')
  // ws.upgradeReq是一个request对象:
  // let user = parseUser(ws.upgradeReq)
  // if (!user) {
  //   // Cookie不存在或无效，直接关闭WebSocket:
  //   ws.close(4001, 'Invalid user')
  //   console.log('已关闭')
  // }
  // 识别成功，把user绑定到该WebSocket对象:
  // ws.user = user
  // 绑定WebSocketServer对象:
  ws.wss = wss
})

wss.broadcast = function(data) {
  wss.clients.forEach(function(client) {
    client.send(data)
  })
}

wss.on('message', function(message) {
  console.log(message)
  if (message && message.trim()) {
    let msg = createMessage('chat', this.user, message.trim())
    this.wss.broadcast(msg)
  }
})

// 消息ID:
var messageIndex = 0

function createMessage(type, user, data) {
  messageIndex++
  return JSON.stringify({
    id: messageIndex,
    type: type,
    user: user,
    data: data
  })
}
//接受来自客户端的连接
// wss.on('connection', function(ws) {
//   console.log(`[SERVER] connection()`)
//   ws.on('message', function(message) {
//     console.log(`[SERVER] Received: ${message}`)
//     ws.send(`ECHO: ${message}`, err => {
//       if (err) {
//         console.log(`[SERVER] error: ${err}`)
//       }
//     })
//   })
// })

// 加载路由中间件
// app.use(router.routes()).use(router.allowedMethods())

// app.listen(3000, () => {
//   console.log('**********Running at port 4000***********')
// })
