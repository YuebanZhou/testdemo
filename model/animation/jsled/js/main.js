$(document).ready(function () {
    setInterval(function () {
        timeout()
    }, 1000)

})

function timeout() {
    var myDate = new Date();
    var hour = myDate.getHours();
    if (hour < 10) {
        hour = "0" + hour
    }
    var minute = myDate.getMinutes();
    if (minute < 10) {
        minute = "0" + minute
    }
    var second = myDate.getSeconds();
    if (second < 10) {
        second = "0" + second
    }
    var str = hour + "" + minute + "" + second;
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        change(arr[i], i)
    }
}

function change(num, index) {
    $(".num").eq(index).find("div").removeClass("active");
    if (num == 0) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(4).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 1) {
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(4).addClass("active");
    } else if (num == 2) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(4).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
    } else if (num == 3) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 4) {
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 5) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 6) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(4).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 7) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 8) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(4).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    } else if (num == 9) {
        $(".num").eq(index).find("div").eq(0).addClass("active");
        $(".num").eq(index).find("div").eq(1).addClass("active");
        $(".num").eq(index).find("div").eq(2).addClass("active");
        $(".num").eq(index).find("div").eq(3).addClass("active");
        $(".num").eq(index).find("div").eq(5).addClass("active");
        $(".num").eq(index).find("div").eq(6).addClass("active");
    }
}
// 0    023456  
// 1    34  
// 2    01245
// 3    01256
// 4    1356
// 5    01236
// 6    012346
// 7    056
// 8    0123456
// 9    012356