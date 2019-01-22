$(document).ready(function () {
    var index=$(".tabNav li.active").index();
    $(".tabCnt ul").eq(index).show();
    $(".tabNav li").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tabCnt ul").hide();
        $(".tabCnt ul").eq(index).show();
    });
    $(".tabPane li").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var text = $(this).html();
        $("h2").addClass(text);
        setTimeout(function () {
            $("h2").removeClass(text);
        }, 1000);
    });
})