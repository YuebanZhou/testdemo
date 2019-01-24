$(document).ready(function () {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 9; j++) {
            $(".block").eq(i).find("div").eq(j).css({
                "left": (Math.floor(Math.random() * 300)) * Math.pow((-1), i) + "px",
                "top": (Math.floor(Math.random() * 300)) * Math.pow((-1), j) + "px",
                "transform": "perspective(1000px) rotateY(" + (Math.floor(Math.random() * 360)) * Math.pow((-1), i) + "deg) rotateX(" + (Math.floor(Math.random() * 360)) * Math.pow((-1), j) + "deg)"
            })
        }
    }
    $(".btn").on("click", function () {
        $(".block div").addClass("active");
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 9; j++) {
                $(".block").eq(i).find(".active").eq(j).css({
                    "left": 0,
                    "top": 0,
                    "transform": "perspective(1000px) rotateY(0deg) rotateX(0deg)"
                })
            }
        }
        setTimeout(function () {
            $(".block div").removeClass("active");
            $(".container").addClass("active");
        }, 1000)
        setTimeout(function () {
            $(".container").removeClass("active");
        }, 6000)
    })
})