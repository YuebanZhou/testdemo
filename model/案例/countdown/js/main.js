// 选择的时间
var time;
// 中间变量，传递时间
var temp;
// 中间变量，传递时间差值
var tempsub;
// 当前时间
var timenow;
// 时间差
var sub;
$("input").on("blur", function () {
    if ($("input").val() === "") {
        time = "请选择完整时间"
    } else {
        sub = new Date($("input").val()) - new Date();
        if (sub <= 0) {
            time = "请选择大于当前时间"
        } else {
            gettimenow($("input").val());
            // 函数获取的结果赋值给time
            time = temp;
        }
    }
    $(".timeresult span").html(time);
})
// 点击开始，开启定时器
$(".start").on("click", function () {
    timer = setInterval(function () {
        // 获取当前时间
        gettimenow();
        // 当前时间渲染
        $(".nowtime span").html(temp);

        // 获取时间差
        sub = new Date($("input").val()) - new Date();
        // 判断时间差
        if (sub <= 0) {
            tempsub = "选择时间小于当前时间"
        } else if (isNaN(sub)) {
            tempsub = "选择时间未选择完整"
        } else {
            gettimesub(sub);
        }
        // 渲染时间差
        $(".result span").html(tempsub);
    }, 1000);

})
// 点击结束，清除定时器
$(".end").on("click", function () {
    clearInterval(timer);
})
// 获取时间
function gettimenow(val) {
    var datetemp;
    if (val === "" || val == null || val == undefined) {
        datetemp = new Date();
    } else {
        datetemp = new Date(val);
    }
    var year = datetemp.getFullYear();
    var month = datetemp.getMonth() + 1;
    var date = datetemp.getDate();
    var hour = datetemp.getHours();
    var minute = datetemp.getMinutes();
    var second = datetemp.getSeconds();
    if (month < 10) {
        month = "0" + month
    }
    if (date < 10) {
        date = "0" + date
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }
    temp = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minute + ":" + second;
};
// 计算倒计时时间
function gettimesub(sub) {
    // 天数
    var days = Math.floor(sub / (24 * 3600 * 1000));
    // 小时
    var leave1 = sub % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    if(hours<10) {
        hours="0"+hours;
    }
    // 分钟
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    if(minutes<10) {
        minutes="0"+minutes;
    }
    // 秒
    var leave3 = leave2 % (60 * 1000);
    var seconds = Math.round(leave3 / 1000);
    if(seconds<10) {
        seconds="0"+seconds;
    }
    console.log(sub);
    tempsub = days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";

}