$(document).ready(function () {
    var i = 0;
    $(".left").on("click", function () {
        i -= 1;
        if (i < 0) {
            i = 2;
        }
        animation(i);

    });
    $(".right").on("click", function () {
        i += 1;
        if (i > 2) {
            i = 0;
        }
        animation(i);
    });
    $(".dot ul li").on("click", function () {
        i = $(this).index();
        animation(i);
    })

    function animation(i) {
        $(".dot ul li img").removeClass("active");
        $(".dot ul li").eq(i).find("img").addClass("active");
        $(".banul li").css({
            "transform": "translateX(100%)"
        });

        $(".banul li").eq(i).css({
            "transform": "translateX(0)"
        });
    }
})