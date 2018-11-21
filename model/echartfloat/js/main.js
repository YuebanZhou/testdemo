function drawchart(timearr, dataarr) {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('main'));
    var myChart2 = echarts.init(document.getElementById('main2'));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: 'chart1'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            lineStyle: {
                color: '#000',
            }
        },
        legend: {
            data: ['销量1']
        },
        grid:{
            y2:140
        },
        xAxis: [{
            type: 'category',
            data: timearr,
            axisLabel: {
                interval: 0, //横轴信息全部显示
                rotate: -45, //-30度角倾斜显示
            }
        }],
        yAxis: [{
            type: 'value',

        }],
        series: [{
            name: '销量1',
            type: 'line',
            data: dataarr
        }]
    };
    var option2 = {
        title: {
            text: 'chart2'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            lineStyle: {
                color: '#000',
            }
        },
        legend: {
            data: ['销量2']
        },
        grid:{
            y2:140
        },
        xAxis: [{
            type: 'category',
            data: timearr,
            axisLabel: {
                interval: 0, //横轴信息全部显示
                rotate: -45, //-30度角倾斜显示
            }
        }],
        yAxis: [{
            type: 'value',

        }],
        series: [{
            name: '销量2',
            type: 'line',
            data: dataarr
        }]
    };

    // 为echarts对象加载数据
    myChart1.setOption(option1);
    myChart2.setOption(option2); //联动配置

    // 分别设置每个实例的 group id
    myChart1.group = 'group1';
    myChart2.group = 'group1';
    echarts.connect('group1');
    // 或者可以直接传入需要联动的实例数
    // echarts.connect([myChart1,myChart2]);
}
// 获取x轴时间字符串
function gettimestr(tseconds) {
    var str = '';
    var year = new Date(tseconds).getFullYear();
    var month = new Date(tseconds).getMonth() + 1;
    var date = new Date(tseconds).getDate();
    var hour = new Date(tseconds).getHours();
    var minute = new Date(tseconds).getMinutes();
    var second = new Date(tseconds).getSeconds();
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
    str += year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return str;
}
getsel()
// 获取两个数值
function getsel() {
    $("i").on("click", function () {
        var that = $(this);
        var block = that.parents(".top").next();
        // 点击i触发函数，判断类型
        if ($(this).hasClass("glyphicon-chevron-right")) {
            $(this).removeClass("glyphicon-chevron-right");
            $(this).addClass("glyphicon-chevron-down")
            block.children("div").each(function () {
                $(this).removeClass("active")
            });
            block.slideDown();

        } else if ($(this).hasClass("glyphicon-chevron-down")) {
            $(this).removeClass("glyphicon-chevron-down");
            $(this).addClass("glyphicon-chevron-right")
            block.slideUp()
        }
        block.children("div").on("click", function () {
            $(this).addClass("active");
            that.prev("span").html($(this).html())
            that.removeClass("glyphicon-chevron-down");
            that.addClass("glyphicon-chevron-right")
            block.slideUp()
        });
    });
    var val1 = 1000;
    var val2 = 5;
    $(".zybtn").on("click", function () {
        switch ($(".sel1 .show span").html()) {
            case 'one second':
                val1 = 1000;
                break;
            case 'one minute':
                val1 = 1000 * 60;
                break;
            case 'one hour':
                val1 = 1000 * 3600;
                break;
            case 'one day':
                val1 = 1000 * 3600 * 24;
                break;
            case 'one week':
                val1 = 1000 * 3600 * 24 * 7;
                break;
            case 'one month':
                val1 = 1000 * 3600 * 24 * 30;
                break;
            case 'one year':
                val1 = 1000 * 3600 * 24 * 365;
                break;
        }
        switch ($(".sel2 .show span").html()) {
            case '5':
                val2 = 5;
                break;
            case '10':
                val2 = 10;
                break;
            case '15':
                val2 = 15;
                break;
            case '20':
                val2 = 20;
                break;
            case '25':
                val2 = 25;
                break;
            case '30':
                val2 = 30;
                break;
            case '35':
                val2 = 35;
                break;
        }
        changedata(val1, val2)
    })
    changedata(val1, val2)
}

function changedata(sel1, sel2) {
    // 获取当前日期
    var getdate = new Date();
    var tseconds = getdate.getTime();

    var timearr = [];
    var dataarr = [];
    for (var i = 0; i < sel2; i++) {
        timearr.push(gettimestr(tseconds - sel1 * i))
        dataarr.push(Math.ceil(Math.random() * 10))
    }

    drawchart(timearr, dataarr)
}