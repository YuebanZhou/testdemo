$(document).ready(function () {
    $(".container div").on("click", function () {
        var src = $(".container iframe").eq($(this).index()).attr("src");
        console.log($(".container iframe"));
        $(".container").hide();
        var str = "<iframe src='" + src + "' frameborder='0'></iframe><div>返回首页</div>";
        $("#content").html(str);
        $("#content").show()
        // 全屏
        var elem = document.getElementById("content");
        requestFullScreen(elem);
        // 退出全屏
        $("#content div").on("click", function () {
            window.location.reload()
        })
    })

})


// 全屏函数
function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen ||
        element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }

}