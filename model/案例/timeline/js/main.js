var data = [{
        "id": 1,
        "img": "./img/img001.png",
        "time": "1994-04-02",
        "msg": "jquery时间轴"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2000-09-01",
        "msg": "jquery时间轴，是一个简单的响应时间轴交替的颜色标签"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2006-09-01",
        "msg": "jquery时间轴，是一个简单的响应时间轴交替的颜色标签。一个图标字体用于在时间轴上的图标的航点"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2009-09-01",
        "msg": "jquery时间轴，是一个简单的响应时间轴交替的颜色标签。一个图标字体用于在时间轴上的图标的航点和媒体查询一些例子说明如何调和智能是绩效呢较小的木"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2012-08-30",
        "msg": "是一个简单的响应时间轴交替的颜色标签。一个图标字体用于在时间轴上的图标的航点和媒体查询一些例子说明如何调和智能是绩效呢较小的木"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2016-06-30",
        "msg": "一个图标字体用于在时间轴上的图标的航点和媒体查询一些例子说明如何调和智能是绩效呢较小的木"
    },
    {
        "id": 1,
        "img": "./img/img001.png",
        "time": "2018-03-15",
        "msg": "用于在时间轴上的图标的航点和媒体查询一些例子说明如何调和智能是绩效呢较小的木"
    }
]
window.onload = function () {
    var str = "";
    var time = [];
    for (var i = 0; i < data.length; i++) {
        time.push(new Date(data[i].time).getTime());
        if (i % 2 == 0) {
            str +=
                '<li class="left" data-time="' + data[i].time + '">' +
                '    <div>' +
                '        <div class="dot"></div>' +
                '        <div class="img"><img src="' + data[i].img + '" alt=""></div>' +
                '        <div class="msg">' + data[i].msg + '</div>' +
                '    </div>' +
                '</li>'
        } else {
            str +=
                '<li class="right" data-time="' + data[i].time + '">' +
                '    <div>' +
                '        <div class="dot"></div>' +
                '        <div class="img"><img src="' + data[i].img + '" alt=""></div>' +
                '        <div class="msg">' + data[i].msg + '</div>' +
                '    </div>' +
                '</li>'
        }

    }
    $("ul").html(str);
    var start = time[0];
    var end = time[time.length - 1];
    var value = [];
    for (var i = 1; i < time.length - 1; i++) {
        value.push(Math.floor((time[i] - start) / (end - start) * 100));
    };
    value.unshift(0);
    value.push(100);
    for (var i = 0; i < $("ul li").length; i++) {
        $("ul li").eq(i).css({
            "top":value[i]*20+"px"
        })
    }
    console.log(value);
}