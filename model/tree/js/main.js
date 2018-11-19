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
check()

function check() {
    // 点击全选，遍历其他CheckBox，将全选CheckBox的状态同步给其他CheckBox
    $("input").on("click", function () {
        // 当前元素属性
        var flag = $(this)[0].checked;
        // 当前点击checkbox的兄弟元素下查找input
        var child = $(this).siblings().find($("input"));
        // 当前checkbox的父元素的input和当前checkbox的祖元素的input
        var grfa = $(this).parents(".level").children("input");
        // 当前checkbox的所有兄弟元素的input
        var bro = $(this).parent().siblings().find("input");

        // 全选，全不选的功能
        // 当前点击元素的兄弟元素找checksin
        child.each(function () {
            $(this)[0].checked = flag;
        });

        // 单选影响全选的功能
        if (flag == false) {
            // 子checkbox中存在一个元素不选中
            for (var i = 0; i < grfa.length; i++) {
                grfa[i].checked = flag;
            }
        } else {
            var temp = 0;
            for (var i = 0; i < bro.length; i++) {
                if (bro[i].checked == flag) {
                    temp += 1;
                }
            };
            if (temp == bro.length) {
                // 当前checkbox的父级
                $(this).parent().siblings("input")[0].checked = flag;
            }
        }

        $("input").each(function () {
            var temp = 0;
            if ($(this).siblings("div").length) {
                var tempinput = $(this).siblings("div").find("input");
                for (var i = 0; i < tempinput.length; i++) {
                    if (tempinput[i].checked) {
                        temp += 1;
                    }
                }
                if (tempinput.length == temp) {
                    $(this)[0].checked = true;
                }
            }

        })
    });
}