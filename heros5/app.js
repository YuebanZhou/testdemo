// 入口文件
// 导入 http 内置模块
const http = require('http')
// 导入自己的 bindRender 函数
const bindRender = require('./render.js')
// 导入自己的 router 路由分发模块
const router = require('./router.js')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {
  // 每当客户端请求过来了，立即调用 bindRender ，为 res 追加 render 方法
  bindRender(res)
  // 调用 router 函数，进行路由的分发处理
  router(req, res)
})

// 指定端口号并启动服务器监听
server.listen(3000, function () {
  console.log('server listen at http://127.0.0.1:3000')
})

