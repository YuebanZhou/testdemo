window.onload = function () {
    $.ajax({
        url: "./json/contain.json",
        type: "post",
        dataType: "json",
        success: function (data) {
            var alllistdata = data.fatherlist;
            var keys = [];
            var value = [];
            // for in 方式遍历对象
            for (key in alllistdata) {
                keys.push(key);
                value.push(alllistdata[key]);
            }

            re(keys, value);
            togglef();
            togglec(keys, value);
        }
    })
}

function re(keys, value) {
    // 内层
    var strf = "";
    for (var i = 0; i < keys.length; i++) {
        var strc = "";
        for (var j = 0; j < value[i].length; j++) {
            strc +=
                '   <li>' + value[i][j].name + '</li>'
        }
        strf +=
            '<li>' +
            '    <p>' + keys[i] + '</p>' +
            '    <ul class="childrenul">' + strc +
            '    </ul>' +
            '</li>'
    }
    $(".fatherul").html(strf);
    $(".fatherul .childrenul").eq(0).addClass("show");
    $(".fatherul .childrenul li").eq(0).addClass("active");
    var tempstr =
        '<div class="name">' + value[0][0].name + '</div>' +
        '<div class="num">' + value[0][0].num + '</div>' +
        '<div class="quality">' + value[0][0].quality + '</div>' +
        '<div class="msg">' + value[0][0].msg + '</div>';
    $(".right").html(tempstr);
}

function togglef() {
    $(".left").on("click", ".fatherul p", function () {
        $(".fatherul .childrenul").removeClass("show");
        $(this).next().addClass("show")
    })
}

function togglec(keys, value) {
    $(".left").on("click", ".childrenul li", function () {
        $(".fatherul .childrenul li").removeClass("active");
        $(this).addClass("active");
        var index1 = $(this).index();
        var index2 = $(this).parents("li").index();
        var name = value[index2][index1].name;
        var num = value[index2][index1].num;
        var quality = value[index2][index1].quality;
        var msg = value[index2][index1].msg;
        var tempstr =
            '<div class="name">' + name + '</div>' +
            '<div class="num">' + num + '</div>' +
            '<div class="quality">' + quality + '</div>' +
            '<div class="msg">' + msg + '</div>';
        $(".right").html(tempstr)
    })
}