mui(document.body).on('tap', '.mui-btn', function(e) {
	//切换为loading状态
	mui(this).button('loading');
	setTimeout(function() {
		//切换到原始状态
		mui(this).button('reset');
	}.bind(this), 2000);
});
mui(document.body).on('tap', '.alert', function(e) {
	//四个参数，（内容，标题，按钮文字，回调函数）
	//第五个参数可选填，为自定义的对话框的dom
	mui.alert("内容", "标题", "确定");
});
mui(document.body).on('tap', '.confirm', function(e) {
	//四个参数，（内容，标题，按钮文字，回调函数）
	//第五个参数可选填，为自定义的对话框的dom
	var confirmarr = ["取消", "确定"];
	mui.confirm("内容", "标题", confirmarr);
});
mui(document.body).on('tap', '.prompt', function(e) {
	//五个参数,(内容,placeholder,标题,按钮文字,回调函数)
	var promptarr = ["取消", "确定"];
	mui.prompt("内容", "请输入内容嘿", "标题", promptarr);
});
mui(document.body).on('tap', '.toast', function(e) {
	mui.toast('登陆成功', {
		duration: 'long',
		type: 'div'
	})
});
//获得slider插件对象
var gallery = mui('.mui-slider');

gallery.slider({
	interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
});
$(".mask").click(function() {
	var mask = mui.createMask(); //callback为用户点击蒙版时自动执行的回调；
	mask.show(); //显示遮罩
})
mui("#demo1").progressbar({progress:20}).show();
mui("#demo1").progressbar().setProgress(50);