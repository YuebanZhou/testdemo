//百度地图API功能
/* 获取地图 */
/* enableMapClick禁止点击功能 */
var map = new BMap.Map("container", {
    enableMapClick: false
});
/* 中心点 */
var point = new BMap.Point(114.52208184, 38.04895831);
/* 缩放倍数 */
map.centerAndZoom(point, 13);
/* 支持滚轮缩放 */
map.enableScrollWheelZoom(true);
/* 比例尺控件 */
var top_left_control = new BMap.ScaleControl({
    anchor: BMAP_ANCHOR_TOP_LEFT
});
/* 缩放平移控件 */
var top_left_navigation = new BMap.NavigationControl();

map.addControl(top_left_control);
map.addControl(top_left_navigation);
map.enableInertialDragging();
map.enableContinuousZoom();
/* 地图样式 */
var styleJson = [{
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
            "color": "#e7f7fc"
        }
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": {
            "color": "#96b5d6"
        }
    },
    {
        "featureType": "green",
        "elementType": "all",
        "stylers": {
            "color": "#b0d3dd"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#a6cfcf"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#7dabb3"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#e7f7fc"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#b0d5d4"
        }
    },
    {
        "featureType": "local",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#7a959a"
        }
    },
    {
        "featureType": "local",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#d6e4e5"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#374a46"
        }
    },
    {
        "featureType": "highway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#374a46"
        }
    },
    {
        "featureType": "highway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#e9eeed"
        }
    }
]
//map.setMapStyle({styleJson:styleJson});

/* 渲染标记点 */
markPoint();
/* 左侧树 */
leftTree();
/* 渲染左侧树数据 */
function leftTree() {
    // 获取json数据
    $.ajax({
        url: "./data.json",
        type: "get",
        dataType: "json",
        async: false,
        success: function (data) {
            var str1 = "";
            for (var i = 0; i < data.length; i++) {
                var str2 = "";
                for (var j = 0; j < data[i].le2data.length; j++) {
                    var str3 = "";
                    for (var k = 0; k < data[i].le2data[j].le3data.length; k++) {
                        var str4 = "";
                        for (var l = 0; l < data[i].le2data[j].le3data[k].le4data.length; l++) {
                            str4 +=
                                '<li class="le4"><i class="line2"></i><img src="./img/bt_' + data[i].le2data[j].le3data[k].le4data[l].type + '.png"><a href="#" data-lng="' + data[i].le2data[j].le3data[k].le4data[l].lng + '" data-lat="' + data[i].le2data[j].le3data[k].le4data[l].lat + '">' +
                                data[i].le2data[j].le3data[k].le4data[l].le4name + "</a></li>";
                        }
                        str3 +=
                            '<li class="le3"><i class="line1"></i><i class="line2"></i><a href="#">' +
                            data[i].le2data[j].le3data[k].le3name +
                            "</a><ul>" +
                            str4 +
                            "</ul></li>";
                    }
                    str2 +=
                        '<li class="le2"><i class="line1"></i><i class="line2"></i><a href="#">' +
                        data[i].le2data[j].le2name +
                        "</a><ul>" +
                        str3 +
                        "</ul></li>";
                }
                str1 +=
                    '<li class="le1 active"><i class="line1"></i><i class="line2"></i><a href="#">' +
                    data[i].le1name +
                    "</a><ul>" +
                    str2 +
                    "</ul></li>";
            }
            $(".tree").html(str1);
        },
        error: function (msg) {
            console.log(msg);
        }
    });

    $(".le3").hide();
    $(".le4").hide();
    $(".le2").each(function () {
        if ($(this).find("a").html() == "石家庄市") {
            $(this).addClass("active");
            $(this).find(".le3").addClass("active");
            $(this).find(".le3").show();
            $(this).find(".le4").show();
        }
    })
    // 点击a标签
    $("li>a").on("click", function () {
        // 当前a标签如果有active属性，移除。如果没有active属性，添加
        if ($(this).parent().hasClass("active")) {
            // 当前li折叠
            $(this).parent().removeClass("active");
            $(this).next().find(">li").hide();
            // 当前li如果有子元素，折叠
            if ($(this).next().find(">li").find("ul").length != 0) {
                // 当前元素后面的ul的所有子元素折叠
                $(this).next().find("li").hide();
                $(this).next().find("li").removeClass("active");
            }
        } else {
            // 相邻元素折叠
            $(this).parent().siblings("li").removeClass("active");
            $(this).parent().siblings("li").find("ul>li").hide();
            // 当前元素展开
            $(this).parent().addClass("active");
            $(this).next().find(">li").show();
        }


    });
}
/* 获取地图标识，切换地图标识 */
function markPoint() {
    /* 清空地图所有标识 */
    map.clearOverlays();

    $.ajax({
        url: "./data.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].le2data.length; j++) {
                    for (var k = 0; k < data[i].le2data[j].le3data.length; k++) {
                        for (var l = 0; l < data[i].le2data[j].le3data[k].le4data.length; l++) {
                            var point = new BMap.Point(data[i].le2data[j].le3data[k].le4data[l].lng, data[i].le2data[j].le3data[k].le4data[l].lat);
                            var myIcon = new BMap.Icon("./img/yq-" + data[i].le2data[j].le3data[k].le4data[l].type + ".png", new BMap.Size(20, 33));
                            var marker = new BMap.Marker(point, {
                                icon: myIcon
                            });
                            map.addOverlay(marker);
                            var content = data[i].le2data[j].le3data[k].le4data[l].le4name;
                            addClickHandler(content, marker);
                        }
                    }
                }
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    });

}

function addClickHandler(content, marker) {
    marker.addEventListener("click", function (e) {
        openInfo(content, e);
    });
}

function openInfo(content, e) {
    var sContent = `
	<div class='mapwindow'>
		<div class='title'>` + content + `</div>
		<div class='time'>质控时间：2019-02-20 06:40</div>
			<div class='block'>
				<div class='bw'><div class="bwname">二氧化硫</div><div class="bwtype">合格</div></div>
				<div class='bw'><div class="bwname">氮氧化物</div><div class="bwtype">合格</div></div>
			</div>
	</div>
		
	`;
    var opts = {
        width: 250,
        height: 120,
        title: ""
    }
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(sContent, opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, point); //开启信息窗口
}


/* 切换质控监测 */
$(".mapTab span").on("click", function () {
    $(".mapTab span").removeClass("active");
    $(this).addClass("active");
    /* 切换方式切换点 */
    markPoint();
})
/* 左侧树与地图中心点联动 */
$(".le4 a").on("click", function () {
    /* 中心点 */
    var point = new BMap.Point($(this).attr("data-lng"), $(this).attr("data-lat"));
    /* 缩放倍数 */
    map.centerAndZoom(point, 13);

    var sContent = `
				<div class='mapwindow'>
					<div class='title'>` + $(this).html() + `</div>
					<div class='time'>质控时间：2019-02-20 06:40</div>
						<div class='block'>
							<div class='bw'><div class="bwname">二氧化硫</div><div class="bwtype">合格</div></div>
							<div class='bw'><div class="bwname">氮氧化物</div><div class="bwtype">合格</div></div>
						</div>
				</div>
					
				`;
    var opts = {
        width: 250,
        height: 120,
        title: ""
    }
    var point = new BMap.Point($(this).attr("data-lng"), $(this).attr("data-lat"));
    var infoWindow = new BMap.InfoWindow(sContent, opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, point); //开启信息窗口
})