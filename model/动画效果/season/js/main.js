$(document).ready(function () {
    // 云
    var strcloud = "";
    for (var i = 0; i < 8; i++) {
        var temp = "";
        for (var j = 0; j < 10; j++) {
            temp += "<div></div>"
        }
        strcloud += `
        <div class="block">
            <div class="cl1"></div>
            <div class="cl2">` + temp + `</div>
        </div>
        `
    }
    $(".cloud").html(strcloud);
    $(".cloud .block").eq(0).css({
        "left": "50px",
        "top": "40px"
    });
    $(".cloud .block").eq(1).css({
        "left": "70px",
        "top": "65px"
    });
    $(".cloud .block").eq(2).css({
        "left": "330px",
        "top": "30px"
    });
    $(".cloud .block").eq(3).css({
        "left": "290px",
        "top": "60px"
    });
    $(".cloud .block").eq(4).css({
        "left": "480px",
        "top": "40px"
    });
    $(".cloud .block").eq(5).css({
        "left": "580px",
        "top": "80px"
    });
    $(".cloud .block").eq(6).css({
        "left": "520px",
        "top": "100px"
    });
    $(".cloud .block").eq(7).css({
        "left": "700px",
        "top": "100px"
    });
    // 雪
    $(".cl2 div").each(function () {
        var left = Math.random() * 150;
        var top = Math.random() * 400;
        $(this).css({
            "left": left,
            "top": top
        })
    })
    // 灌木
    var strbush="";
    for(var i=0;i<9;i++) {
        strbush+="<div></div>"
    }
    $(".land .bush").html(strbush)
})