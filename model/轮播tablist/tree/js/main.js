$.ajax({
    url: './tree.json',
    async: false,
    type: 'post',
    dataType: 'json',
    success: function (data) {
        reload(data);
        change();
        ope();
    },
    error: function (err) {
        console.log(err);
    }
})


function reload(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        var str2 = "";
        for (var j = 0; j < data[i].children.length; j++) {
            var str3 = "";
            for (var k = 0; k < data[i].children[j].children.length; k++) {
                var str4 = "";
                for (var l = 0; l < data[i].children[j].children[k].children.length; l++) {
                    var str5 = "";
                    for (var m = 0; m < data[i].children[j].children[k].children[l].children.length; m++) {
                        str5 +=
                            '<div class="level level5">' +
                            '    <span>' + data[i].children[j].children[k].children[l].children[m].name + '</span>' +
                            '</div>'
                    }
                    str4 +=
                        '<div class="level level4">' +
                        '    <span>' + data[i].children[j].children[k].children[l].name + '</span>' + str5 +
                        '</div>'
                }
                str3 +=
                    '<div class="level level3">' +
                    '    <span>' + data[i].children[j].children[k].name + '</span>' + str4 +
                    '</div>'
            }
            str2 +=
                '<div class="level level2">' +
                '    <span>' + data[i].children[j].name + '</span>' + str3 +
                '</div>'
        }
        str +=
            '<div class="level level1">' +
            '    <span>' + data[i].name + '</span>' + str2 +
            '</div>';

    }

    $(".container").html(str)

}

function change() {
    // 遍历所有的span标签
    $("span").each(function () {
        if ($(this).next().length) {
            $(this).addClass("plus")
        }
        $(this).click(function () {
            if ($(this).hasClass("plus")) {
                $(this).attr("class", "sub");
            } else if ($(this).hasClass("sub")) {
                $(this).siblings().find("span").each(function () {
                    if ($(this).hasClass("sub")) {
                        $(this).attr("class", "plus")
                    }
                })
                $(this).attr("class", "plus")
            }

        })
    })
}

function ope() {
    $(".open").on("click", function () {
        $("span").each(function () {
            if ($(this).hasClass("plus")) {
                $(this).attr("class", "sub")
            }
        })
    })
    $(".close").on("click", function () {
        $("span").each(function () {
            if ($(this).hasClass("sub")) {
                $(this).attr("class", "plus")
            }
        })
    })
}
