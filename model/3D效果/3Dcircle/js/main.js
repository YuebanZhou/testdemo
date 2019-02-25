$(document).ready(function () {
    $(".banner div").on("click", function () {
        $(".container").hide()
        $(".btn").hide()
        $(".container").eq($(this).index()).show()
        $(".btn").eq($(this).index()).show()
    })
    $(".btn").on("click", function () {
        var num = $(this).attr("class").split("")[7];
        zhuan(num)
    });

})

function zhuan(num) {
    if ($(".container").eq(num - 1).hasClass("active")) {
        $(".container").eq(num - 1).removeClass("active")
    } else {
        $(".container").eq(num - 1).addClass("active")
    }
}