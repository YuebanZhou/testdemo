//checkbox样式
window.onload = function () {
    // 点击全选，遍历其他CheckBox，将全选CheckBox的状态同步给其他CheckBox
    $(".checkall").on("click", function () {
        // checked是DOM元素的一个属性，需要通过[0]访问
        var flag = $(this)[0].checked;
        $(".checksin").each(function () {
            $(this)[0].checked = flag;
        })
        result()
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
        result()
    });
    $(".plus").click(function () {
        $(this).next().val(parseInt($(this).next().val()) + 1)
        result()
    });
    $(".sub").click(function () {
        $(this).prev().val(parseInt($(this).prev().val()) - 1);
        if (parseInt($(this).prev().val()) <= 1) {
            $(this).prev().val(1);
        }
        result()
    });

}
// 计算函数
function result() {
    var allprice = 0;
    var allnum = 0;
    $("li").each(function () {
        if ($(this).find(".checksin")[0].checked == true) {
            allprice += parseFloat($(this).find(".price").html()) * parseInt($(this).find(".numchange").val());
            allnum += parseInt($(this).find(".numchange").val());
        } else {
            allprice += 0;
            allnum += 0;
        }
    });
    $(".allprice").html(allprice);
    $(".allnum").html(allnum);
}
// 删除某项
function del(){
    $("li").each(function(){
        if ($(this).find(".checksin")[0].checked == true) {
            $(this).remove();
        }
    })
    result()
}