const Koa = require('koa')
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  //接收数据
  socket.on('login', function(data) {
    console.log(data.userName);
      // 发送数据
    //   socket.emit('relogin', {
    //     msg: `你好${obj.username}`,
    //     code: 200
    //   });  
  });
  socket.on('send', function(data) {
    console.log(data);
    // 发送数据
    // console.log(this)
    socket.broadcast.emit('sendMsg', {
      userName: data.userName,
      msg: data.message,
      code: 200
    });  
});
});
 
server.listen(9090, function(){
  console.log('socket running at 9090');
});