$(document).ready(function () {
    $(".btn").click(function () {
        if ($(this).hasClass("kai")) {
            $(this).removeClass("kai");
            $(this).addClass("guan");
            $(".contain div").removeClass("active1");
            $(".contain div").addClass("active2");
        } else if ($(this).hasClass("guan")) {
            $(this).removeClass("guan");
            $(this).addClass("kai");
            $(".contain div").removeClass("active2");
            $(".contain div").addClass("active1");
        } else {
            $(this).addClass("kai");
            $(".contain div").removeClass("active2");
            $(".contain div").addClass("active1");
        }
    })
})