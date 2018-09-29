const template = require('art-template')  // 学会分析功能；（能力）   ->   现在培养还不晚
const path = require('path')
const moment = require('moment')

// 定义一个 art-template 类型的 时间过滤器
template.defaults.imports.dateFormat = function (date, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(pattern)
}

// 封装一个 render 函数，手动把 这个 render函数追加为 res 的自定义属性
// res.render()
function bindRender(res) {
  res.render = function (fileName, data) {
    const htmlStr = template(path.join(__dirname, './views/' + fileName + '.html'), data)
    this.end(htmlStr)
  }

  // 为 res 对象绑定一个 res.redirect 方法，方便进行服务器端跳转
  res.redirect = function (location) {
    res.writeHeader(302, {
      'Location': location
    })
    this.end()
  }

  // 封装一个 返回JSON 字符串的方法
  res.json = function (obj) {
    this.end(JSON.stringify(obj))
  }
}


// 明天会讲 Node 开发web网站的 框架   ，在  express 中，就有 这几个方法

module.exports = bindRender