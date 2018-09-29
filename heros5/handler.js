// 封装业务逻辑处理模块; 主要职能： 负责业务的处理【渲染页面、返回静态资源
//  数据的增删改查 ， 不属于业务逻辑
const fs = require('fs')
const path = require('path')
// 导入自己的 数据操作模块
const model = require('./model.js')
const querystring = require('querystring')

module.exports = {
  showIndexPage(req, res) { // 展示首页的方法
    // 这里的 读取 data.json 文件，不属于 业务逻辑，属于 数据的 CRUD
    //   C  create  R  read    U  update   D  delete

    /* fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, dataStr) => {
      if (err) return res.end('首页渲染失败，请稍后再试！')
      const heros = JSON.parse(dataStr)
      res.render('index', { list: heros })
    }) */

    // 调用 model 模块中的 getAllHeros 方法获取所有英雄数据
    // 1. 获取首页要渲染的数据
    // 2. 调用 res.render 渲染页面并返回
    model.getAllHeros((err, heros) => {
      // if (err) return res.end('首页获取失败！')
      if (err) return res.render('index', { list: [] })
      res.render('index', { list: heros })
    })
  },
  showAddPage(req, res) { // 展示添加页面
    res.render('add', {})
  },
  addNewHero(req, res) { // 添加新英雄
    // 2. 在 handler 对应方法中， 先获取到 客户端提交过来的 表单数据
    // 3. 需要把 表单数据组织为一个 新英雄对象
    // 4. 把 新英雄对象，保存到 data.json 中即可
    // 5. 告诉客户端添加成功！

    //  req 对象身上，有一个 data 事件，每当 触发 req 的data 事件，就表示 客户端向服务器 提交数据了
    // 在 data 事件的处理函数中，只有一个参数 可以叫做 chunk(片，块)
    // chunk 参数表示 客户端提交过来的 一块一块的数据
    let data = ''
    req.on('data', (chunk) => {
      // 每当接收一点儿数据，就把数据拼接到 data 中去
      data += chunk
    })

    // 每当 触发 req 对象的 end 事件，就表示客户端发送过来的数据 接收完毕啦；
    req.on('end', () => {
      // 1. 转码中文
      // 2. 使用字符串操作解析出一个英雄对象
      let hero = querystring.parse(data)
      // 完善英雄信息
      hero.ctime = new Date()
      let id = 0
      // 获取所有的英雄，然后循环遍历，找到最大的ID值，让 Id + 1
      model.getAllHeros((err, heros) => {
        if (err) return res.end('添加英雄失败！')
        heros.forEach(item => {
          if (item.id > id) {
            id = item.id
          }
        })
        id++
        // 设置Id值
        hero.id = id
        // 将新英雄，直接保存到 data.json 中不好操作，所以我们，先得到完整的最新的英雄数组，然后统一把所有的英雄，写入到 data.json 中
        heros.push(hero)
        model.writeAllHeros(heros, (err) => {
          // if (err) return res.end('发生错误')
          // return res.end('OK')
          // 服务器端跳转不能使用 location.href 因为Node中没有window对象
          //   200 成功的  400  未找到资源   500  服务器内部错误    300  网页重定向   302
          /* res.writeHeader(302, {
            'Location': '/'
          })
          res.end() */

          // 注意：302 服务器重定向，只在 表单同步提交时候生效，当 使用异步的Ajax提交表单时候，无法使用 302 重定向；
          // res.redirect('/')

          if (err) {
            //    { err_code:0, msg: '消息' }     如果err_code 为0 表示成功，为 1 表示失败
            // res.end(JSON.stringify({ err_code: 1, msg: '添加失败了！' }))

            // 调用自己封装的 res.json 方法
            res.json({ err_code: 1, msg: '添加失败了！' })
          } else {
            // res.end(JSON.stringify({ err_code: 0, msg: 'ok' }))
            res.json({ err_code: 0, msg: 'ok' })
          }
        })
      })
    })
  },
  showHeroInfoPage(req, res) { // 展示英雄信息页面
    // 分析步骤：
    //  1. 获取到传递过来的 req.query 身上的Id
    const id = req.query.id
    //  2. 根据id获取对应的英雄数据【一会儿需要在Model中新增一个  根据Id获取英雄的方法】
    //  3. 将数据渲染到模板页面中去,将渲染的结果返回给浏览器去展示【res.render】
    model.getHeroById(id, (err, hero) => {
      if (err) res.end('获取英雄信息页面失败！')
      res.render('info', hero)
    })
  },
  showEditPage(req, res) { // 展示编辑页面
    // 分析：
    // 1. 拿到Id
    const id = req.query.id
    // 2. 拿到要编辑的英雄数据
    // 3. 把要编辑的英雄，渲染到页面中
    model.getHeroById(id, (err, hero) => {
      if (err) return res.end('展示编辑页面失败')
      res.render('edit', hero)
    })
  },
  editHero(req, res) { // 编辑英雄数据
    // 分析：
    // 1. 拿到客户端提交过来的表单数据
    // 2. 把 提交过来的数据，解析为 英雄对象
    // 3. 把所有的旧英雄数组读取过来， 根据Id 值和 for 循环，找到要修改的那个英雄
    // 4. 更新属性值
    // 5. 返回客户端处理的结果
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })

    req.on('end', () => {
      // 解析出新英雄对象
      const newHero = querystring.parse(data)
      newHero.id = parseInt(newHero.id)
      // 拿到所有旧英雄数组
      model.getAllHeros((err, heros) => {
        if (err) return res.end('修改失败！')
        // 循环所有的英雄，找到需要被修改的那个
        heros.some((item, i) => {
          if (item.id == newHero.id) {
            // 注意：这个有问题，无法修改原数组
            // item = newHero
            heros.splice(i, 1, newHero)
            // 如果找到，则立即终止循环
            return true
          }
        })

        // 把最新的英雄数组写入到 data.json
        model.writeAllHeros(heros, (err) => {
          if (err) {
            res.json({ err_code: 1, msg: '修改英雄失败了！' })
          } else {
            res.json({ err_code: 0 })
          }
        })
      })
    })
  },
  deleteHeroById(req, res) { // 根据Id删除英雄
    // 分析：
    // 1. 获取Id
    const id = req.query.id
    // 2. 获取所有英雄
    // 3. some 循环，找到要删除的那一项，调用数组的 splice 删除之
    // 4. 调用model中写入英雄的方法
    model.getAllHeros((err, heros) => {
      if (err) return res.end('删除失败')
      heros.some((item, i) => {
        if (item.id == id) {
          heros.splice(i, 1)
          // 当删除完毕后，只是修改了内存中的数组，需要把它序列化到 data.json 文件中
          model.writeAllHeros(heros, (err) => {
            if (err) return res.end('删除失败')
            // 删除完后，重新刷新首页
            res.redirect('/')
          })
          return true
        }
      })
    })
  },
  resolveStaticResource(req, res) { // 处理静态资源请求
    fs.readFile(path.join(__dirname, req.url), (err, buf) => {
      if (err) res.end('404')
      res.end(buf)
    })
  }
}