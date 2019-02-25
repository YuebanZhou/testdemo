$(".imgblock input").change(function () {
  function getObjectURL(file) {
    var url = null;
    if (window.createObjcectURL != undefined) {
      url = window.createOjcectURL(file);
    } else if (window.URL != undefined) {
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  }
  var objURL = getObjectURL(this.files[0]); //这里的objURL就是input file的真实路径

  $(".imgContainer").html("<img src='" + objURL + "'/>");
  $(".small").html("<img src='" + objURL + "'/>");
  setTimeout(function () {
    var width = $(".imgContainer img").width();
    var height = $(".imgContainer img").height();
    var size = width / height;
    // console.log(width);
    // console.log(height);
    // console.log(size);
    if (size > 1) {
      $(".imgContainer img").width("400px");
      $(".small img").width("400px");
    } else if (size < 1) {
      $(".imgContainer img").height("400px");
      $(".small img").height("400px");
    } else {
      $(".imgContainer img").width("400px");
      $(".imgContainer img").height("400px");
      $(".small img").width("400px");
      $(".small img").height("400px");
    }
  }, 1000);

  $(".modal").fadeIn("slow");
});

$(".cancelbtn").on("click", function () {
  window.location.reload();
});

function moveblock(obj, len) {
  // event.clientX 鼠标点击位置距离body左侧距离
  // event.clientY 鼠标点击位置距离body上方距离
  // obj.offset().left 元素距离body左侧距离
  // obj.offset().top 元素距离body上侧距离
  // gapX 鼠标距离本元素左侧距离
  // gapY 鼠标距离本元素上侧距离
  obj.bind("mousedown", start);

  function start(event) {
    if (event.button == 0) {
      gapX = event.clientX - obj.offset().left;
      gapY = event.clientY - obj.offset().top;
      $(document).bind("mousemove", move);
      $(document).bind("mouseup", stop);
    }
    return false;
  }

  function move(event) {
    // 本元素距离父元素左侧距离
    // 本元素距离父元素上侧距离
    var x0 = event.clientX - gapX - $(".imgcut").offset().left;
    var y0 = event.clientY - gapY - $(".imgcut").offset().top;
    // 边缘不出界
    if (x0 <= 0) {
      x0 = 0;
    }
    if (y0 <= 0) {
      y0 = 0;
    }
    if (x0 >= $(".imgcut").width() - obj.width()) {
      x0 = $(".imgcut").width() - obj.width();
    }
    if (y0 >= $(".imgcut").height() - obj.height()) {
      y0 = $(".imgcut").height() - obj.height();
    }
    // 居中调整
    obj.css({
      left: x0 + "px",
      top: y0 + "px"
    });
    var xi = $(".imgContainer img").offset().left;
    var yi = $(".imgContainer img").offset().top;
    var xc = $(".imgblank").offset().left;
    var yc = $(".imgblank").offset().top;
    $(".small img").css({
      "margin-left": ($(".imgContainer img").width() - len) / 2 - (xc - xi),
      "margin-top": ($(".imgContainer img").height() - len) / 2 - (yc - yi)
    });
    return false;
  }

  function stop() {
    $(document).unbind("mousemove", move);
    $(document).unbind("mouseup", stop);
  }
}

moveblock($(".imgblank"), 200, 200);

var index = 0;
$(".btnplus").on("click", function () {
  index += 1;
  var len = 200 + index * 10;
  $(".imgblank").css({
    width: len,
    height: len
  });
  $(".small img").css({
    width: $(".imgContainer img").width() * (200 / len),
    height: $(".imgContainer img").height() * (200 / len)
  });
  moveblock($(".imgblank"), len);
});
$(".btnsub").on("click", function () {
  index -= 1;
  var len = 200 + index * 10;
  $(".imgblank").css({
    width: len,
    height: len
  });
  $(".small img").css({
    width: $(".imgContainer img").width() * (200 / len),
    height: $(".imgContainer img").height() * (200 / len)
  });
  moveblock($(".imgblank"), len);
});