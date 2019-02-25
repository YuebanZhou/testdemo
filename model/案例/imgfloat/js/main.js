var src = "";
//点击事件们

$(".list").css("background", "rgba(255,255,255,0.5)");
$(".rblist").css("background", "rgba(255,255,255,0.5)");
//默认概况list被选中，背景色突出显示
$(".list4").css("background", "rgba(255,255,255,0.3)");
$(".rb").hide();
$(".rb4").show();
//点击list
$(".list").click(function () {
    $(".list").css("background", "rgba(255,255,255,0.5)");
    $(this).css("background", "rgba(255,255,255,0.3)");

    if ($(this).attr("data-item") == "1") {
        $(".rb").hide();
        $(".rb1").show();
    } else if ($(this).attr("data-item") == "2") {
        $(".rb").hide();
        $(".rb2").show();
    } else if ($(this).attr("data-item") == "3") {
        $(".rb").hide();
        $(".rb3").show();
    } else if ($(this).attr("data-item") == "4") {
        $(".rb").hide();
        $(".rb4").show();
    }
});
$(".rblist ").click(function () {
    $(".rblist").css("background", "rgba(255,255,255,0.5)");
    $(this).css("background", "rgba(255,255,255,0.3)");
    $(".imgfloat").show()
    if ($(this).attr("data-item") == "rb1list1") {
        $(".imgfloat").attr("src", "./img/ld1.png")
    } else if ($(this).attr("data-item") == "rb1list2") {
        $(".imgfloat").attr("src", "./img/ld2.png")
    } else if ($(this).attr("data-item") == "rb2list1") {
        $(".imgfloat").attr("src", "./img/ld3.png")
    } else if ($(this).attr("data-item") == "rb2list2") {
        $(".imgfloat").attr("src", "./img/ld4.png")
    } else if ($(this).attr("data-item") == "rb3list1") {
        $(".imgfloat").attr("src", "./img/ld5.png")
    } else if ($(this).attr("data-item") == "rb3list2") {
        $(".imgfloat").attr("src", "./img/ld6.png")
    } else if ($(this).attr("data-item") == "rb4list1") {
        $(".imgfloat").attr("src", "./img/gaikuang.png")
    }

});
//清除图片和box
$("#container").on("click", function () {
    $(".imgfloat").hide();
    // $(".imgblock").hide();
})
// 拖拽和缩放start
$(".imgfloat").on('mousewheel DOMMouseScroll', onMouseScroll);

function onMouseScroll(e) {
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel));

    if (delta < 0) { //向下滚动

        $(this).width($(this).width() / 1.1)
        $(this).height($(this).height() / 1.1)

    } else { //向上滚动

        $(this).width($(this).width() * 1.1)
        $(this).height($(this).height() * 1.1)
    }
}

var drag = function (obj) {
    obj.bind("mousedown", start);

    function start(event) {
        if (event.button == 0) {
            gapX = event.clientX - obj.offset().left;
            gapY = event.clientY - obj.offset().top;
            $(document).bind("mousemove", move);
            $(document).bind("mouseup", stop);
        }
        return false;
    }

    function move(event) {
        obj.css({
            "left": (event.clientX - gapX + obj.width() / 2) + "px",
            "top": (event.clientY - gapY + obj.height() / 2) + "px"
        });
        return false;
    }

    function stop() {
        $(document).unbind("mousemove", move);
        $(document).unbind("mouseup", stop);

    }
}
obj = $(".imgfloat");
drag(obj);
// 拖拽和缩放end