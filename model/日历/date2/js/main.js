//定义全局变量 
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸";
var dzString = "子丑寅卯辰巳午未申酉戌亥";
var numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
var weekString = "日一二三四五六";
var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

backnow()
ope();
getmon();
GetcYearString();
// 跳转到指定日期
$(".btn1").on("click", function () {
    $("li").each(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        }
    })
    var year = $(".sel1 input").val()
    var month = $(".sel2 input").val()
    if (year < 1921) {
        year = 1921
        $(".sel1 input").val("1921")
    } else if (year > 2020) {
        year = 2020
        $(".sel1 input").val("2020")
    }

    if (month > 12) {
        month = 12
        $(".sel2 input").val("12")
    } else if (month < 1) {
        month = 1
        $(".sel2 input").val("1")
    }
    getday(year, month, getMonthDay(year, month))
    getmon();
    GetcYearString();
})
// 跳转回当前的日期
$(".btn2").on("click", function () {
    backnow()
    getmon();
    GetcYearString();
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
    $("li").each(function () {
        if ($(this).children(".msg1").html() == nowdate) {
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
        $(".level2ul1").find("li").eq(i).children(".msg1").html(arr1[i]);
        $(".level2ul2").find("li").eq(i).children(".msg1").html(arr2[i]);
        $(".level2ul3").find("li").eq(i).children(".msg1").html(arr3[i]);
        $(".level2ul4").find("li").eq(i).children(".msg1").html(arr4[i]);
        $(".level2ul5").find("li").eq(i).children(".msg1").html(arr5[i]);
        $(".level2ul6").find("li").eq(i).children(".msg1").html(arr6[i]);
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


function GetBit(m, n) {
    return (m >> n) & 1;
}
//农历转换 
function e2c() {
    TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    var total, m, n, k;
    var isEnd = false;
    var tmp = TheDate.getYear();
    if (tmp < 1900) {
        tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

    if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
        total++;
    }
    for (m = 0;; m++) {
        k = (CalendarData[m] < 0xfff) ? 11 : 12;
        for (n = k; n >= 0; n--) {
            if (total <= 29 + GetBit(CalendarData[m], n)) {
                isEnd = true;
                break;
            }
            total = total - 29 - GetBit(CalendarData[m], n);
        }
        if (isEnd) break;
    }
    cYear = 1921 + m;
    cMonth = k - n + 1;
    cDay = total;
    if (k == 12) {
        if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth = 1 - cMonth;
        }
        if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth--;
        }
    }
}

function GetcDateString() {
    var tmp = "";
    if (cMonth < 1) {
        tmp += "(闰)";
        tmp += monString.charAt(-cMonth - 1);
    } else {
        tmp += monString.charAt(cMonth - 1);
    }
    tmp += "月";
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
    if (cDay % 10 != 0 || cDay == 10) {
        tmp += numString.charAt((cDay - 1) % 10);
    }
    return tmp;
}

function GetcYearString() {
    var solarYear = $(".sel1 input").val()
    var solarMonth = $(".sel2 input").val()
    var solarDay = '01'
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        var tmp = "";
        /*显示农历年：（ 如：甲午(马)年 ）*/
        tmp += tgString.charAt((cYear - 4) % 10);
        tmp += dzString.charAt((cYear - 4) % 12);
        tmp += "(";
        tmp += sx.charAt((cYear - 4) % 12);
        tmp += ")年 ";
        $(".msg3").html(tmp)
    }
}

function GetLunarDay(solarYear, solarMonth, solarDay) {
    //solarYear = solarYear<1900?(1900+solarYear):solarYear; 
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        return GetcDateString();
    }
}

// 获取阴历以及节假日
function getmon() {
    // 定义阳历阴历日期
    var bmon = $(".sel2 input").val();
    var bday;
    var smon;
    var sday;
    var arr = [];
    var str = '';
    var flag = ""
    // 遍历每个li
    $(".level2ul li").each(function () {
        if ($(this).hasClass("active1")) {
            $(this).removeClass("active1")
        }
        // 渲染日历
        $(this).children(".msg2").html("");
        var temp1 = $(this).parents(".date").prev(".top").find(".sel1 input").val();
        var temp2 = $(this).parents(".date").prev(".top").find(".sel2 input").val();
        var temp3 = $(this).children(".msg1").html();
        if (temp3) {
            $(this).children(".msg2").html(GetLunarDay(temp1, temp2, temp3));
        }

        // 判断节假日
        // 阳历
        bday = $(this).find(".msg1").html();
        // 阴历
        if ($(this).find(".msg2").html()) {
            arr = $(this).find(".msg2").html().split("月");
            smon = arr[0];
            sday = arr[1];
        }
        if ((bmon == 1) && (bday == 1)) {
            str = "元旦";
            flag = "active1";
        } else if ((bmon == 3) && (bday == 8)) {
            str = "妇女节";
            flag = "active1";
        } else if ((bmon == 3) && (bday == 12)) {
            str = "植树节";
            flag = "active1";
        } else if ((bmon == 4) && (bday == 5)) {
            str = "清明节";
            flag = "active1";
        } else if ((bmon == 5) && (bday == 1)) {
            str = "国际劳动节";
            flag = "active1";
        } else if ((bmon == 5) && (bday == 4)) {
            str = "青年节";
            flag = "active1";
        } else if ((bmon == 6) && (bday == 1)) {
            str = "国际儿童节";
            flag = "active1";
        } else if ((bmon == 7) && (bday == 1)) {
            str = "建党节";
            flag = "active1";
        } else if ((bmon == 8) && (bday == 1)) {
            str = "建军节";
            flag = "active1";
        } else if ((bmon == 9) && (bday == 10)) {
            str = "教师节";
            flag = "active1";
        } else if ((bmon == 10) && (bday == 1)) {
            str = "国庆节";
            flag = "active1";
        } else if ((bmon == 12) && (bday == 24)) {
            str = "平安夜";
            flag = "active1";
        } else if ((bmon == 12) && (bday == 25)) {
            str = "圣诞";
            flag = "active1";
        } else if ((smon == "正") && (sday == "初一")) {
            str = "春节";
            flag = "active1";
        } else if ((smon == "正") && (sday == "十五")) {
            str = "元宵节";
            flag = "active1";
        } else if ((smon == "二") && (sday == "初二")) {
            str = "龙抬头";
            flag = "active1";
        } else if ((smon == "五") && (sday == "初五")) {
            str = "端午节";
            flag = "active1";
        } else if ((smon == "七") && (sday == "初七")) {
            str = "七夕";
            flag = "active1";
        } else if ((smon == "八") && (sday == "十五")) {
            str = "中秋节";
            flag = "active1";
        } else if ((smon == "九") && (sday == "初九")) {
            str = "重阳节";
            flag = "active1"
        } else if ((smon == "腊") && (sday == "廿三")) {
            str = "小年";
            flag = "active1"
        } else if ((smon == "腊") && (sday == "三十")) {
            str = "除夕";
            flag = "active1"
        } else {
            str = $(this).find(".msg2").html();
            flag = ""
        }
        $(this).find(".msg2").html(str);
        $(this).addClass(flag);

    })
}