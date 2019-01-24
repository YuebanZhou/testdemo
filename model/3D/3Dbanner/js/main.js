$(document).ready(function () {
    // 限定高度
    var height = $(window).height();
    $(".container1").height(height);
    $(".container2").height(height);
    $(".container3").height(height);
    $(".masker").height(height);
    // 到时间后移除遮罩层
    setTimeout(function () {
        $(".masker").hide();
    }, 1000)
    banner1();
    banner2();
    banner3();

})

function banner1() {
    // 第一个轮播图
    for (var i = 0; i < 7; i++) {
        $(".container1 div").eq(i).css({
            "transition": "transform 1s"
        });
    }
    $(".container1 div").on("click", function () {
        var index = $(this).index();
        var prev1 = (index - 1) >= 0 ? (index - 1) : (index - 1 + 7);
        var prev2 = (index - 2) >= 0 ? (index - 2) : (index - 2 + 7);
        var prev3 = (index - 3) >= 0 ? (index - 3) : (index - 3 + 7);
        var next1 = (index + 1) <= 6 ? (index + 1) : (index + 1 - 7);
        var next2 = (index + 2) <= 6 ? (index + 2) : (index + 2 - 7);
        var next3 = (index + 3) <= 6 ? (index + 3) : (index + 3 - 7);
        $(".container1 div").eq(prev3).css({
            "transform": "perspective(200px) translateZ(-60px) translateX(-300px)",
            "z-index": "1"
        });
        $(".container1 div").eq(prev2).css({
            "transform": "perspective(200px) translateZ(-40px) translateX(-200px)",
            "z-index": "2"
        });
        $(".container1 div").eq(prev1).css({
            "transform": "perspective(200px) translateZ(-20px) translateX(-100px)",
            "z-index": "3"
        });
        $(".container1 div").eq(index).css({
            "transform": "perspective(200px) translateZ(0px) translateX(0px)",
            "z-index": "4"
        });
        $(".container1 div").eq(next1).css({
            "transform": "perspective(200px) translateZ(-20px) translateX(100px)",
            "z-index": "3"
        });
        $(".container1 div").eq(next2).css({
            "transform": "perspective(200px) translateZ(-40px) translateX(200px)",
            "z-index": "2"
        });
        $(".container1 div").eq(next3).css({
            "transform": "perspective(200px) translateZ(-60px) translateX(300px)",
            "z-index": "1"
        });
    });
}

function banner2() {
    // 第二个轮播图
    for (var i = 0; i < 8; i++) {
        $(".container2 div").eq(i).css({
            "transition": "transform 1s"
        });
    }
    $(".container2 div").on("click", function () {
        var index = $(this).index();
        var next1 = (index + 1) <= 7 ? (index + 1) : (index + 1 - 8);
        var next2 = (index + 2) <= 7 ? (index + 2) : (index + 2 - 8);
        var next3 = (index + 3) <= 7 ? (index + 3) : (index + 3 - 8);
        var next4 = (index + 4) <= 7 ? (index + 4) : (index + 4 - 8);
        var next5 = (index + 5) <= 7 ? (index + 5) : (index + 5 - 8);
        var next6 = (index + 6) <= 7 ? (index + 6) : (index + 6 - 8);
        var next7 = (index + 7) <= 7 ? (index + 7) : (index + 7 - 8);
        $(".container2 div").eq(index).css({
            "transform": "perspective(2000px) translateZ(0px) translateX(0px) rotateY(0deg)",
            "z-index": "5"
        })
        $(".container2 div").eq(next1).css({
            "transform": "perspective(2000px) translateZ(-110px) translateX(270px) rotateY(45deg)",
            "z-index": "4"
        })
        $(".container2 div").eq(next2).css({
            "transform": "perspective(2000px) translateZ(-380px) translateX(380px) rotateY(90deg)",
            "z-index": "3"
        })
        $(".container2 div").eq(next3).css({
            "transform": "perspective(2000px) translateZ(-650px) translateX(270px) rotateY(-45deg)",
            "z-index": "2"
        })
        $(".container2 div").eq(next4).css({
            "transform": "perspective(2000px) translateZ(-760px) translateX(0px) rotateY(0deg)",
            "z-index": "1"
        })
        $(".container2 div").eq(next5).css({
            "transform": "perspective(2000px) translateZ(-650px) translateX(-270px) rotateY(45deg)",
            "z-index": "2"
        })
        $(".container2 div").eq(next6).css({
            "transform": "perspective(2000px) translateZ(-380px) translateX(-380px) rotateY(-90deg)",
            "z-index": "3"
        })
        $(".container2 div").eq(next7).css({
            "transform": "perspective(2000px) translateZ(-110px) translateX(-270px) rotateY(-45deg)",
            "z-index": "4"
        })
    });

}

function banner3() {
    // 第三个轮播图
    for (var i = 0; i < 7; i++) {
        $(".container3 div").eq(i).css({
            "transition": "transform 1s"
        });
    }
    $(".container3 div").on("click", function () {
        var index = $(this).index();
        var prev1 = (index - 1) >= 0 ? (index - 1) : (index - 1 + 7);
        var prev2 = (index - 2) >= 0 ? (index - 2) : (index - 2 + 7);
        var prev3 = (index - 3) >= 0 ? (index - 3) : (index - 3 + 7);
        var next1 = (index + 1) <= 6 ? (index + 1) : (index + 1 - 7);
        var next2 = (index + 2) <= 6 ? (index + 2) : (index + 2 - 7);
        var next3 = (index + 3) <= 6 ? (index + 3) : (index + 3 - 7);
        $(".container3 div").eq(prev3).css({
            "transform": "perspective(200px) translateZ(-60px) translateY(-150px)",
            "z-index": "1"
        });
        $(".container3 div").eq(prev2).css({
            "transform": "perspective(200px) translateZ(-40px) translateY(-100px)",
            "z-index": "2"
        });
        $(".container3 div").eq(prev1).css({
            "transform": "perspective(200px) translateZ(-20px) translateY(-50px)",
            "z-index": "3"
        });
        $(".container3 div").eq(index).css({
            "transform": "perspective(200px) translateZ(0px) translateY(0px)",
            "z-index": "4"
        });
        $(".container3 div").eq(next1).css({
            "transform": "perspective(200px) translateZ(-20px) translateY(50px)",
            "z-index": "3"
        });
        $(".container3 div").eq(next2).css({
            "transform": "perspective(200px) translateZ(-40px) translateY(100px)",
            "z-index": "2"
        });
        $(".container3 div").eq(next3).css({
            "transform": "perspective(200px) translateZ(-60px) translateY(150px)",
            "z-index": "1"
        });
    });
}