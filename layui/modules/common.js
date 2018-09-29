// layui.define()方法为layui的定义模块方法
// 该方法接收两个参数
// 第一个参数是依赖模块，第二个参数是回调函数
layui.define(['jquery'],function(exports){
  var $=layui.jquery;
  // 定义一个obj对象
  var obj={
    // obj对象有一个ajax方法
    ajax:function(url,type,dataType,data,callback){
      $.ajax({
        url:url,
        type:type,
        dataType:dataType,
        data:data,
        success:callback
      })
    }
  }
  // 如果封装其他jquery插件，类比ajax放到函数中即可
  // export为输出接口，两个参数
  // 第一个参数是输出模块的名字，第二个是输出对象
  exports('common',obj)
})