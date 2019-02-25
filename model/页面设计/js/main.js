$(document).ready(function () {
    $(".top div").on("click", function () {
        $(".content>div").hide();
        $(".content>div").eq($(this).index()).show();
        var width = $(this).width();
        var left = width * $(this).index();
        $(".active").animate({left:left});
    })
})