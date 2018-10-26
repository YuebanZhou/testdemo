(function() {
	window.addEventListener('DOMContentLoaded', function() {
		var ua = navigator.userAgent;
		//先处理Android平台
		if (ua.indexOf("Android") > 0 && ua.indexOf('Html5Plus') == -1) {
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
			iframe.src = 'streamapp://s/HelloMUI';
		}
	});
})();