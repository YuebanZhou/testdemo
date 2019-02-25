var temp = sessionStorage.getItem("mailmsg");
var alldata = JSON.parse(temp);
if (temp == null) {
    $.ajax({
        url: "./msg.json",
        type: "post",
        dataType: "json",
        async: false,
        success: function (data) {
            sessionStorage.setItem("mailmsg", JSON.stringify(data.mailmsg));
            temp = sessionStorage.getItem("mailmsg");
            alldata = JSON.parse(temp);
        },
        error: function (err) {
            console.log(err);
        }
    });
}
// 每页的信息条数
var sinmsg = 5;
// 信息总条数
var totalmsg = alldata.length;
// 总页数
var totalpage = Math.ceil(alldata.length / sinmsg);
// 当前页
var nowpage = 1;
page();

function page() {
    // $(".total span").html(totalmsg);
    var str = "";
    if (nowpage <= 1) {
        nowpage = 1;
    } else if (nowpage >= totalpage) {
        nowpage = totalpage;
    }
    if (totalpage == 1) {
        // 只有一条数据
        str += "<div>1</div>";
    } else if (totalpage == 2) {
        // 只有两条数据
        str += "<div>1</div>" + "<div>2</div>";
    } else if (totalpage == 3) {
        // 只有三条数据
        str += "<div>1</div>" + "<div>2</div>" + "<div>3</div>";
    } else if (totalpage > 3 && nowpage == 1) {
        // 当前页为第一页
        str +=
            '<div class="active">' +
            nowpage +
            "</div>" +
            "<div>" +
            (nowpage + 1) +
            "</div>" +
            "<div>" +
            (nowpage + 2) +
            "</div>";
    } else if (totalpage > 3 && nowpage == totalpage) {
        // 当前页等于总页数
        str +=
            "<div>" +
            (nowpage - 2) +
            "</div>" +
            "<div>" +
            (nowpage - 1) +
            "</div>" +
            '<div class="active">' +
            nowpage +
            "</div>";
    } else {
        str +=
            "<div>" +
            (nowpage - 1) +
            "</div>" +
            '<div class="active">' +
            nowpage +
            "</div>" +
            "<div>" +
            (nowpage + 1) +
            "</div>";
    }

    $(".repagebtn").html(str);
    $(".repagebtn")
        .find("div")
        .each(function () {
            $(this).removeClass("active");
            if (parseInt($(this).html()) == nowpage) {
                $(this).addClass("active");
            }
        });
    var start = (nowpage - 1) * sinmsg;
    var end = nowpage * sinmsg;
    if (end >= totalmsg) {
        end = totalmsg;
    }
    pagedata(start, end);
}

function pagedata(start, end) {
    var str = "";
    for (var i = start; i < end; i++) {
        str +=
            "<tr data-id='" + alldata[i].dataid + "'>" +
            "    <td>" +
            '        <input type="checkbox" name="tail" id="'+alldata[i].dataid+'" class="checksin" />' +
            '        <label for="'+alldata[i].dataid+'"></label>' +
            "    </td>" +
            "    <td class='enter'>" + alldata[i].title +
            "    </td>" +
            "    <td>" + alldata[i].time +
            "    </td>" +
            "<td><div class='del'>删除</div></td>"
        "</tr>";
    }
    $("tbody").html(str);
}

// ---------- 点击切换nowpage start
$(".repagebtn").on("click", "div", function () {
    $(".repagebtn")
        .find("div")
        .removeClass("active");
    $(this).addClass("active");
    nowpage = parseInt($(this).html());
    page();
});
$(".first").on("click", function () {
    nowpage = 1;
    page();
});
$(".end").on("click", function () {
    nowpage = totalpage;
    page();
});
$(".prev").on("click", function () {
    nowpage = nowpage - 1;
    page();
});
$(".next").on("click", function () {
    nowpage = nowpage + 1;
    page();
});

// ---------- 点击切换nowpage end


// ---------- 单项删除 start
$("tbody").on("click", ".del", function () {
    // 弹出框
    var tof = window.confirm("确认删除这条记录么");
    // 判断弹出框选择结果
    if (tof) {
        var id = $(this).parents("tr").attr("data-id");
        for (var i = 0; i < alldata.length; i++) {
            if (id == alldata[i].dataid) {
                alldata.splice(i, 1);
                sessionStorage.setItem("mailmsg", JSON.stringify(alldata));
                temp = sessionStorage.getItem("mailmsg");
                location.reload();
            }
        }
    }
})
// ---------- 单项删除 end

// ---------- 批量删除 start
$(".delall").on("click", function () {
    // 弹出框
    var tof = window.confirm("确认删除本页所选内容么");
    // 判断弹出框选择结果
    if (tof) {
        $(".checksin").each(function () {
            if ($(this)[0].checked == true) {
                id = $(this).parents("tr").attr("data-id");
                for (var i = 0; i < alldata.length; i++) {
                    if (id == alldata[i].dataid) {
                        alldata.splice(i, 1);
                    }
                }
            }
        });
        sessionStorage.setItem("mailmsg", JSON.stringify(alldata));
        temp = sessionStorage.getItem("mailmsg");
        location.reload();
    }
})
// ---------- 批量删除 end

// ---------- checkbox的全选全不选功能 start
$(".checkall").on("click", function () {
    // checked是DOM元素的一个属性，需要通过[0]访问
    var flag = $(this)[0].checked;
    $(".checksin").each(function () {
        $(this)[0].checked = flag;
    })
});
$(".checksin").on("click", function () {
    var i = 0;
    $(".checksin").each(function () {
        // 存在一个未选中，则，全选按钮未选中
        if ($(this)[0].checked == false) {
            $(".checkall")[0].checked = false;
        } else {
            // 如果是选中的，累加，和全部长度比较
            i += 1;
            if (i == $(".checksin").length) {
                $(".checkall")[0].checked = true;
            }
        }

    })
});
// ---------- checkbox的全选全不选功能 end

$(".change select").on("change", function () {
    if ($(".change select").val() != "") {
        console.log($(".change select").val());
        sinmsg = $(".change select").val();
        totalpage = Math.ceil(alldata.length / sinmsg)
        page()
    }

})

$("tbody").on("click", "tr .enter", function () {
    for (var i = 0; i < alldata.length; i++) {

        if (alldata[i].dataid == $(this).parent("tr").attr("data-id")) {
            $(".modal").html(alldata[i].msg);
            var arr = alldata[i].msg.split("\n");
            var str2 = ""
            for (var j = 0; j < arr.length; j++) {
                str2 += "<div>" + arr[j] + "</div>"
            }
            console.log(arr);
            console.log(str2);
            var str1 = `
            <div class="close">X</div>
            <div class="top">
                <div class="title">` + alldata[i].title + `</div>
                <div class="person">` + alldata[i].sendperson + `</div>
                <div class="time">` + alldata[i].time + `</div>
            </div>
            <div class="content">` + str2 + `</div>
            
            `

        }
    }
    $(".modal").html(str1);
    $(".modal").fadeIn("slow");
})
$(".modal").on("click", ".close", function () {
    $(".modal").fadeOut("fast");
    $(".modal").html("");
});
