// 用来配置layui，让layui能够找到模块，一般放在全局JS里完成
layui.config({
  // 定义layui组件的目录
  base:'./modules/'
}).extend({
  common:'common'
})
// 冒号前的common表示模块的名字，就是加载模块时使用的名字
// 冒号后的common表示这个模块的路径
// 路径是./modules/common.js，这里拼接了base路径后再省略.js后缀
// 最后的结果就是common