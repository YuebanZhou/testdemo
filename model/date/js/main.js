backnow()
ope();
// 跳转到指定日期
$(".btn1").on("click", function () {
    var year = $(".sel1 input").val()
    var month = $(".sel2 input").val()
    getday(year, month, getMonthDay(year, month))
})
// 跳转回当前的日期
$(".btn2").on("click", function () {
    backnow()
})

// 当前日历
function backnow() {
    // 默认渲染当前日历
    var now = new Date();
    var nowyear = now.getFullYear();
    var nowmonth = now.getMonth() + 1;
    var nowdate = now.getDate();
    $(".sel1 input").val(nowyear)
    $(".sel2 input").val(nowmonth)
    // 根据年份、月份、月份天数获取当月日历
    getday(nowyear, nowmonth, getMonthDay(nowyear, nowmonth))
    // 标记当前日期
    $("li").each(function(){
        if($(this).html()==nowdate) {
            $(this).addClass("active");
        }
    })
}

// 加减年份月份
function ope() {
    var year;
    var month;
    $(".sel1 .prev").on("click", function () {
        year = parseInt($(".sel1").find("input").val()) - 1
        $(this).next("input").val(year)
    })
    $(".sel1 .next").on("click", function () {
        year = parseInt($(".sel1").find("input").val()) + 1
        $(this).prev("input").val(year)
    })
    $(".sel2 .prev").on("click", function () {
        month = parseInt($(".sel2").find("input").val()) - 1
        if (month <= 1) {
            month = 1;
        }
        $(this).next("input").val(month)
    })
    $(".sel2 .next").on("click", function () {
        month = parseInt($(".sel2").find("input").val()) + 1
        if (month >= 12) {
            month = 12;
        }
        $(this).prev("input").val(month)
    })
}

// 根据年份、月份、月份天数获取当月日历
function getday(year, month, monthday) {
    console.log(monthday);
    // 拼接当月1号字符串
    var str = year + "-" + month + "-01";
    // 判断所选日期当月1号的星期
    var time = new Date(str);
    var date = time.getDay();
    // 每行建立一个数组
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    var arr5 = [];
    var arr6 = [];
    // 1号星期前用空补足
    for (var i = 0; i < date; i++) {
        arr1.push("")
    }
    // 剩余用日期补足
    for (var i = date; i < 7; i++) {
        arr1.push(i - date + 1)
    }
    for (var i = 0; i < 7; i++) {
        arr2.push(7 - date + i + 1);
        arr3.push(14 - date + i + 1);
        arr4.push(21 - date + i + 1);
        arr5.push(28 - date + i + 1);
        arr6.push(35 - date + i + 1);
        if (arr5[i] > monthday) {
            arr5[i] = ""
        }
        if (arr6[i] > monthday) {
            arr6[i] = ""
        }
        // li标签用数组内容补足
        $(".level2ul1").find("li").eq(i).html(arr1[i]);
        $(".level2ul2").find("li").eq(i).html(arr2[i]);
        $(".level2ul3").find("li").eq(i).html(arr3[i]);
        $(".level2ul4").find("li").eq(i).html(arr4[i]);
        $(".level2ul5").find("li").eq(i).html(arr5[i]);
        $(".level2ul6").find("li").eq(i).html(arr6[i]);
    }

}

// 判断闰年
function runYear(year) {
    // 能够被400整除
    // 能够被4整除且不能被100整除
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
}

// 获取每个月的天数
function getMonthDay(year, month) {
    var monthday = 0;
    var year = parseInt(year);
    var month = parseInt(month);
    switch (month) {
        case 1:
            monthday = 31;
            break;
        case 2:
            if (runYear(year)) {
                monthday = 28;
            } else {
                monthday = 29;
            }
            break;
        case 3:
            monthday = 31;
            break;
        case 4:
            monthday = 30;
            break;
        case 5:
            monthday = 31;
            break;
        case 6:
            monthday = 30;
            break;
        case 7:
            monthday = 31;
            break;
        case 8:
            monthday = 31;
            break;
        case 9:
            monthday = 30;
            break;
        case 10:
            monthday = 31;
            break;
        case 11:
            monthday = 30;
            break;
        case 12:
            monthday = 31;
            break;
    }
    return monthday;
}