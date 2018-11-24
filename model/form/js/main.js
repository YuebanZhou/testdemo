//  配置插件
iziToast.settings({
    timeout: 1000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'center'
});

function validator(reg, that) {
    var str = that.val();
    // \u4E00-\u9FA5表示大部分中文范围
    var reg = reg;
    if (str == "") {
        msgalert('error', '请输入内容', that)
    } else {
        if (!reg.test(str)) {
            msgalert('error', '格式不正确', that)
        } else if (that.hasClass("error")) {
            that.removeClass("error")
        }
    }
}
// 姓名验证
$("#name").on("blur", function () {
    var that = $(this)
    var reg = /^[\u4E00-\u9FA5]+$/;
    validator(reg, that)
})
// 邮箱验证
$("#email").on("blur", function () {
    var that = $(this)
    var reg = /^[0-9|A-z|_]{1,17}[@][0-9|A-z]{1,3}.(com)$/;
    validator(reg, that)
})
// 电话号码验证
$("#tel").on("blur", function () {
    var that = $(this)
    var reg = /^1[34578]\d{9}$/;
    validator(reg, that)
})

// IP验证
$("#ip").on("blur", function () {
    var that = $(this)
    var reg = /^\d+.\d+.\d+.\d+$/;
    validator(reg, that)
})

// 密码验证
$("#pwd").on("blur", function () {
    var that = $(this)
    var reg = /^[a-z0-9_-]{6,18}$/;
    validator(reg, that)
})
// 密码重复验证
$("#pwdr").on("blur", function () {
    var str = $(this).val();
    var that = $(this)
    var pstr = $("#pwd").val();
    var reg = /^[a-z0-9_-]{6,18}$/;
    if (str == "") {
        msgalert('error', '请输入内容', that)
    } else {
        if (!reg.test(str)) {
            msgalert('error', '格式不正确', that)
        } else if (str != pstr) {
            msgalert('error', '密码重复错误', that)
        } else if (that.hasClass("error")) {
            that.removeClass("error")
        }
    }
})
$(".qwe").on("click", function () {
    if ($(".error").length) {
        msgalert('warning', '存在未提交内容')
    } else {
        msgalert('success', '提交成功')
    }

})


function msgalert(type, msg, that) {

    if (type == 'error') {
        iziToast.error({
            title: 'Error',
            message: msg,
        })
        that.addClass("error")

    } else if (type == 'success') {
        iziToast.success({
            title: 'Success',
            message: msg,
        })
    } else if (type == 'warning') {
        iziToast.warning({
            title: 'warning',
            message: msg,
        })
    }
}