topope();
links();

// 顶部操作
function topope() {
  // 个人信息下拉框
  $(".center .top .person").on("click", function () {
    $(".center .top .personmodal").fadeIn("slow");
    setTimeout(function () {
      $(".center .top .personmodal").fadeOut("slow");
    }, 2000);
  });

  // 渲染左侧菜单树
  $.ajax({
    url: "./msg.json",
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
      var tabmsg = data.tabmsg;
      var str1 = "";
      for (var i = 0; i < tabmsg.length; i++) {
        var str2 = "";
        for (var j = 0; j < tabmsg[i].secontab.length; j++) {
          str2 += "<div data-link='"+tabmsg[i].secontab[j].link+"'>" + tabmsg[i].secontab[j].name + "</div>";
        }
        str1 +=
          `
        <div class="first">
            <div class="title" data-flag="true">
                <span class="icon iconfont">` +
          tabmsg[i].titleicon +
          `</span>
                <span class="tabname">` +
          tabmsg[i].titlename +
          `</span>
                <span class="icon iconfont right">&#xe6f9;</span>
            </div>
            <div class="second">` +
          str2 +
          `</div>
        </div>
        `;
      }
      $(".left .tab").html(str1);
    },
    error: function (msg) {
      console.log(msg);
    }
  });
  // 左侧菜单栏操作

  $(".leftbtn").on("click", function () {
    $(".left .second").hide();
    $(".left .title").removeClass("active");
    $(".left .second").removeClass("active");
    var leftWidth = $(".left").width();
    if (leftWidth > 50) {
      // 收起
      $(".left").addClass("active");
      $(".center").addClass("active");
      $(".left .logo").css(
        "background",
        "url(./img/logo2.png) no-repeat center"
      );
      $(".left .tab .tabname").hide();
      $(".left .tab .tabname")
        .next()
        .hide();
    } else {
      // 展开
      $(".left").removeClass("active");
      $(".center").removeClass("active");
      $(".left .logo").css(
        "background",
        "url(./img/logo.png) no-repeat center"
      );
      $(".left .tab .tabname").fadeIn();
      $(".left .tab .tabname")
        .next()
        .fadeIn();
    }
  });
  $(".left .tab").on("click", ".title", function () {
    // 箭头默认全部恢复
    $(".title .right").each(function () {
      $(this).html("&#xe6f9;");
    });
    // 二级菜单默认全部收起
    $(".second").each(function () {
      $(this).hide("fast");
    });
    // 默认移除active类名
    $(".left .tab .title").removeClass("active");
    // 当前元素的兄弟元素的title，修改flag
    $(this).parent().siblings().find(".title").attr("data-flag", "true")

    // 展开
    $(".left").removeClass("active");
    $(".center").removeClass("active");
    $(".left .logo").css("background", "url(./img/logo.png) no-repeat center");
    $(".left .tab .tabname").fadeIn();
    $(".left .tab .tabname")
      .next()
      .fadeIn();
    if ($(this).attr("data-flag") == "false") {
      // 收起
      // 修改箭头方向，二级菜单显示
      var index = $(this)
        .parent()
        .index();
      $(this)
        .find("span")
        .eq(2)
        .html("&#xe6f9;");
      $(".second")
        .eq(index)
        .hide("fast");
      $(this).removeClass("active");
      $(this).attr("data-flag", "true")
    } else if ($(this).attr("data-flag") == "true") {
      // 展开
      // 修改箭头方向，二级菜单显示
      var index = $(this)
        .parent()
        .index();
      $(this)
        .find("span")
        .eq(2)
        .html("&#xe749;");
      $(".second")
        .eq(index)
        .show("fast");
      $(this).addClass("active");
      $(this).attr("data-flag", "false")
    }
  });
  // 二级菜单
  $(".left .tab").on("click", ".second div", function () {
    $(".left .tab .second div").removeClass("active");
    $(this).addClass("active");
  });
}
// 跳转链接
function links() {
  // 顶栏信息按钮
  $(".top .message").on("click", function () {
    $(".center .content iframe").attr("src", "./mail.html");
  });
  // logo点击跳转到主页
  $(".left .logo").on("click", function () {
    $(".center .content iframe").attr("src", "./home.html");
  });
  // 个人信息
  $(".top .personmodal div")
    .eq(0)
    .on("click", function () {
      $(".center .content iframe").attr("src", "./personmsg.html");
    });
  // 修改密码 
  $(".top .personmodal div")
    .eq(1)
    .on("click", function () {
      $(".center .content iframe").attr("src", "./personpwd.html");
    });
  // 退出
  $(".top .personmodal div")
    .eq(3)
    .on("click", function () {
      self.location.href = "./login.html";
    });
  // 列表项被点击的跳转
  $(".left .second div").on("click",function(){
    var link=$(this).attr("data-link");
    $(".center .content iframe").attr("src", "./"+link);
  })
}
