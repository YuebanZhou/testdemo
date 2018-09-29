const path = require('path')
const fs = require('fs')
const handler = require('./handler.js')
const urlModule = require('url')

// 封装了自己的 router 模块，作用： 负责路由请求的分发；
// 封装原则之一： 方法的执行结果，不应该在方法内部私自处理，而是要返回给方法的调用者，让调用者决定如何处理
// 封装原则之二： 保证封装的模块 或 方法 【职能单一】
module.exports = function (req, res) {
  // 获取请求的URL地址
  // const url = req.url
  // 使用 url 核心模块解析 url 路径
  //#region 之前如何解析URL地址
  /* const urlObj = urlModule.parse(req.url, true)
  // 将解析出来的 urlObj 身上的 pathname 交给 url 变量
  const url = urlObj.pathname
  // 由于将来在进行 业务逻辑操作的时候，难免会用到 解析出来的 query 对象，所以我们把 urlObj 身上的 query 属性，人为挂载到了 req 对象上，今后，只要能访问到 req， 必然能通过 req.query.查询字符串名称 来得到想要的查询字符串的值
  req.query = urlObj.query */
  //#endregion

  const { pathname: url, query } = urlModule.parse(req.url, true)
  req.query = query


  // 获取每次请求的 请求 method 类型
  const method = req.method.toLowerCase()

  if (method === 'get' && url === '/') { // 访问首页
    handler.showIndexPage(req, res)

  } else if (method === 'get' && url === '/add') { // 显示请求添加页面   get
    handler.showAddPage(req, res)

  } else if (method === 'post' && url === '/add') { // 添加新英雄   post
    // 分析处理添加英雄请求：
    // 1. 把 处理 添加的 业务逻辑，封装为 handler 中对应的方法
    // 2. 在 handler 对应方法中， 先获取到 客户端提交过来的 表单数据
    // 3. 需要把 表单数据组织为一个 新英雄对象
    // 4. 把 新英雄对象，保存到 data.json 中即可
    // 5. 告诉客户端添加成功！
    handler.addNewHero(req, res)

  } else if (method === 'get' && url === '/info') { // 使用Node提供的核心url模块 去解析URL地址
    handler.showHeroInfoPage(req, res)

  } else if (method === 'get' && url === '/edit') { // 请求编辑页面
    handler.showEditPage(req, res)

  } else if (method === 'post' && url === '/edit') { // 提交修改英雄
    handler.editHero(req, res)

  } else if (method === 'get' && url === '/del') { // 删除英雄
    handler.deleteHeroById(req, res)

  } else if (method === 'get' && url.startsWith('/node_modules/')) { // 请求的是样式
    handler.resolveStaticResource(req, res)

  } else {
    res.end('404')
  }
}