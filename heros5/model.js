// 负责数据CRUD的 Model 模块
const fs = require('fs')
const path = require('path')

// 读取 data.json 中所有的英雄数据
function getAll(callback) {
  fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, dataStr) => {
    if (err) return callback(err)
    const heros = JSON.parse(dataStr)
    callback(null, heros)
  })
}

// 将所有英雄写入到 data.json
function writeAll(heros, callback) {
  fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(heros), callback)
}


// 分析：根据Id获取对应英雄对象
// 1. 拿到Id
// 2. 拿到所有英雄，然后循环遍历， 根据Id进行匹配，如果能找到，直接返回即可
function getHeroById(id, callback) {
  getAll((err, heros) => {
    if (err) return callback(err)
    heros.some((item, i) => {
      if (item.id == id) {
        callback(null, item)
        // 终止后续循环
        return true
      }
    })
  })
}

//  将来还会有 删除 、 修改、 添加的 方法

module.exports = {
  getAllHeros: getAll, // 导出 读取所有英雄数据的方法
  writeAllHeros: writeAll, // 写入所有的英雄
  getHeroById
}


// 学习了 关于对象中简化的两种方式
/* var title = '123'
var a = {
  sayHello(){},
  title
} */

// some

// const let

// 解构赋值

// 箭头函数

// startsWith  endsWith

// 形参默认值



// promise    fetchAPI   

// let const -> 作用域问题和变量提升
// 箭头函数
// 解构赋值
// 属性和方法的简便定义方式

// 形参默认值


// 将来要讲到的 ES6 新特性
/* 字符串的padStart和padEnd
导入导出  // import  export default  export 
模板字符串
Promise
Fetch API
class */