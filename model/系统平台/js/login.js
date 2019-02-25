// 登录

$(".loginbtn").on("click", function () {
    if ($(".name input").val() == "" || $(".pwd input").val() == "") {
        msgalert('warning', '请输入用户名或密码')
    } else if ($(".name input").val() == "admin" && $(".pwd input").val() == "admin") {
        msgalert('success', '登录成功');
        setTimeout(function () {
            self.location.href = "./index.html";
        }, 2000)
    } else {
        msgalert('error', '密码或用户名错误');
    }
})
// 取消 
$(".cancelbtn").on("click", function () {
    location.reload();
})