$(document).ready(function() {
  $.ajax({
    url: "./js/color.json",
    type: "get",
    dataType: "json",
    success: function(data) {
      redata(data);
      per2Obj();
    },
    error: function(msg) {
      console.log(msg);
    }
  });
});
function redata(data) {
  var strColor = "";
  for (var i = 0; i < data.length; i++) {
    strColor +=
      "<li>" +
      '<div class="block" data-color="' +data[i].hex +'" data-cmyk="' +data[i].CMYK +'" data-rgb="' +data[i].RGB +'" data-name="' +data[i].name +'" data-pinyin="' +data[i].pinyin +'">' +
      data[i].name +
      "</div>" +
      "</li>";
  }
  $(".container .color ul").html(strColor);
  // 侧渲染颜色标签
  $(".block").each(function() {
    var color = $(this).attr("data-color");
    $(this).css({
      border: "2px solid " + color,
      "border-top": "20px solid " + color,
      color: color
    });
    $(this)
      .find(".before,.after")
      .css({
        border: "10px solid " + color
      });
  });
  $(".block").on("click", function() {
    var that = $(this);
    change(that);
  });
}
function change(obj) {
  var color = obj.attr("data-color");
  var name = obj.attr("data-name");
  var pinyin = obj.attr("data-pinyin");
  var cmyk = obj.attr("data-cmyk");
  var rgb = obj.attr("data-rgb");
  var hex = obj.attr("data-color");

  $("body").css("background", color);

  $(".msg .name1").html(name);
  $(".msg .name2").html(pinyin.toUpperCase());

  $(".msg .per2 .C").attr("data-per",cmyk.split(",")[0]);
  $(".msg .per2 .M").attr("data-per",cmyk.split(",")[1]);
  $(".msg .per2 .Y").attr("data-per",cmyk.split(",")[2]);
  $(".msg .per2 .K").attr("data-per",cmyk.split(",")[3]);
  $(".msg .per2 .C span").html(cmyk.split(",")[0]);
  $(".msg .per2 .M span").html(cmyk.split(",")[1]);
  $(".msg .per2 .Y span").html(cmyk.split(",")[2]);
  $(".msg .per2 .K span").html(cmyk.split(",")[3]);
  per2Obj()

  $(".msg .per1 .R").html(rgb.split(",")[0]);
  $(".msg .per1 .G").html(rgb.split(",")[1]);
  $(".msg .per1 .B").html(rgb.split(",")[2]);

  $(".msg .per3 .H").html(hex);
}
function per2Obj() {
  $(".per2 > div").each(function() {
    var per = $(this).attr("data-per");
    $(this)
        .find(".right .cir")
        .css({
            "transform": "rotate(-225deg)",
            "transition": "transform 0s"
        });
        $(this)
        .find(".left .cir")
        .css({
            "transform": "rotate(-225deg)",
            "transition": "transform 0s"
        });
    if (per > 0 && per < 50) {
      $(this)
        .find(".right .cir")
        .css({
            "transform":"rotate(" + (-225 + (per / 100) * 360) + "deg)",
            "transition": "transform 1s"
        });
    } else if (per == 50) {
      $(this)
        .find(".right .cir")
        .css({
            "transform":"rotate(-45deg)",
            "transition": "transform 1s"
        });
    } else if (per > 50 && per < 100) {
      $(this)
        .find(".right .cir")
        .css({
            "transform":"rotate(-45deg)",
            "transition": "transform 1s"
        });
      var that = $(this);
      setTimeout(function() {
        that
          .find(".left .cir")
          .css({
            "transform":"rotate(" + (-225 + ((per - 50) / 100) * 360) + "deg)",
            "transition": "transform 1s"
          });
      }, 1000);
    } else if (per == 100) {
      $(this)
        .find(".right .cir")
        .css({
            "transform":"rotate(-45deg)",
            "transition": "transform 1s"
        });
      var that = $(this);
      setTimeout(function() {
        that.find(".left .cir").css({
            "transform":"rotate(-45deg)",
            "transition": "transform 1s"
        });
      }, 1000);
    }
  });
}
