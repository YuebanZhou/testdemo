// 取数据
var temp = localStorage.getItem("temp");
// 获取对象数据
var listAll = JSON.parse(temp);
// 若没有缓存
if (temp == null) {
    var alldata = [];
    $.ajax({
        url: "./tail.json",
        async: false,
        type: "post",
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                alldata.push(data[i]);
            };
            localStorage.setItem("temp", JSON.stringify(alldata));
            temp = localStorage.getItem("temp");
            listAll = JSON.parse(temp);
        }
    })
}

redata();
modelope();
delall();
check();

// 渲染表格函数
function redata() {
    var str = "";
    for (var i = 0; i < listAll.length; i++) {
        str +=
            '<tr>' +
            '<td><input type="checkbox" name="tail" id="" class="checksin"></td>' +
            '<td>' + listAll[i].name + '</td>' +
            '<td>' + listAll[i].sex + '</td>' +
            '<td>' + listAll[i].party + '</td>' +
            '<td>' + listAll[i].proper + '</td>' +
            '<td>' + listAll[i].level + '</td>' +
            '<td>' +
            '    <div class="ope edit">编辑</div>' +
            '    <div class="ope del">删除</div>' +
            '</td>' +
            '</tr>'
    }
    $("tbody").html(str);
    localStorage.setItem("temp", JSON.stringify(listAll));
}

function redatapage() {
    // 开始的索引
    var start = (nowpage - 1) * sinlen;
    // 结束的索引
    var end = start + sinlen;
    var str = "";
    for (var i = start; i < end; i++) {
        str +=
            '<tr>' +
            '<td><input type="checkbox" name="tail" id="" class="checksin"></td>' +
            '<td>' + listAll[i].name + '</td>' +
            '<td>' + listAll[i].sex + '</td>' +
            '<td>' + listAll[i].party + '</td>' +
            '<td>' + listAll[i].proper + '</td>' +
            '<td>' + listAll[i].level + '</td>' +
            '<td>' +
            '    <div class="ope edit">编辑</div>' +
            '    <div class="ope del">删除</div>' +
            '</td>' +
            '</tr>'
    }
    $("tbody").html(str);
    localStorage.setItem("temp", JSON.stringify(listAll));
}
// 添加、编辑、单项删除
function modelope() {
    var flag = "";
    var index;
    // 添加
    $(".footer .add").on("click", function () {
        flag = "add";
        $(".mask").show();
        $(".model").show();
        $(".model .name input").val("");
        $(".model .sex select").val("");
        $(".model .party select").val("");
        $(".model .proper input").val("");
        $(".model .level select").val("");
    });
    // 模态框取消按钮
    $(".model .false").on("click", function () {
        $(".mask").hide();
        $(".model").hide();
    });
    // 模态框确定按钮
    $(".model .true").on("click", function () {
        $(".mask").hide();
        $(".model").hide();

        if (flag == "add") {
            var name = $(".model .name input").val();
            var sex = $(".model .sex select").val();
            var party = $(".model .party select").val();
            var proper = $(".model .proper input").val();
            var level = $(".model .level select").val();
            listAll.push({
                "name": name,
                "sex": sex,
                "party": party,
                "proper": proper,
                "level": level
            });
        } else if (flag == "edit") {
            listAll[index].name = $(".model .name input").val();
            listAll[index].sex = $(".model .sex select").val();
            listAll[index].party = $(".model .party select").val();
            listAll[index].proper = $(".model .proper input").val();
            listAll[index].level = $(".model .level select").val();
        }

        redata();

    });

    // 删除
    $("tbody").on("click", ".del", function () {
        console.log(listAll);
        var index = $(this).parents("tr").index();
        listAll.splice(index, 1);
        redata();
    });

    // 编辑
    $("tbody").on("click", ".edit", function () {
        flag = "edit";
        index = $(this).parents("tr").index();
        $(".mask").show();
        $(".model").show();
        $(".model .name input").val(listAll[index].name);
        $(".model .sex select").val(listAll[index].sex);
        $(".model .party select").val(listAll[index].party);
        $(".model .proper input").val(listAll[index].proper);
        $(".model .level select").val(listAll[index].level);
    });
}
// 全选按钮状态改变
function check() {
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

}
// 批量删除
function delall() {
    $(".footer .delall").on("click", function () {
        $("tbody .checksin").each(function () {
            if ($(this)[0].checked == true) {
                $(this).parents("tr").remove();
            }
        });
        listAll = [];
        $("tbody tr").each(function () {
            var name = $(this).children("td").eq(1).html();
            var sex = $(this).children("td").eq(2).html();
            var party = $(this).children("td").eq(3).html();
            var proper = $(this).children("td").eq(4).html();
            var level = $(this).children("td").eq(5).html();
            listAll.push({
                "name": name,
                "sex": sex,
                "party": party,
                "proper": proper,
                "level": level
            });
        })
        localStorage.setItem("temp", JSON.stringify(listAll));
    })
}

