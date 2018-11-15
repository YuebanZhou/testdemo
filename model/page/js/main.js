var temp = sessionStorage.getItem("pagetemp");
var alldata = JSON.parse(temp);
if (temp == null) {
  $.ajax({
    url: "./tail.json",
    type: "post",
    dataType: "json",
    async: false,
    success: function (data) {
      sessionStorage.setItem("pagetemp", JSON.stringify(data));
      temp = sessionStorage.getItem("pagetemp");
      alldata = JSON.parse(temp);
    },
    error: function (err) {
      console.log(err);
    }
  });
}
// 每页的信息条数
var sinmsg = 5;
// 信息总条数
var totalmsg = alldata.length;
// 总页数
var totalpage = Math.ceil(alldata.length / sinmsg);
// 当前页
var nowpage = 1;
page();

function page() {
  $(".total span").html(totalmsg);
  var str = "";
  if (nowpage <= 1) {
    nowpage = 1;
  } else if (nowpage >= totalpage) {
    nowpage = totalpage;
  }
  if (totalpage == 1) {
    // 只有一条数据
    str += "<div>1</div>";
  } else if (totalpage == 2) {
    // 只有两条数据
    str += "<div>1</div>" + "<div>2</div>";
  } else if (totalpage == 3) {
    // 只有三条数据
    str += "<div>1</div>" + "<div>2</div>" + "<div>3</div>";
  } else if (totalpage > 3 && nowpage == 1) {
    // 当前页为第一页
    str +=
      '<div class="pageactive">' +
      nowpage +
      "</div>" +
      "<div>" +
      (nowpage + 1) +
      "</div>" +
      "<div>" +
      (nowpage + 2) +
      "</div>";
  } else if (totalpage > 3 && nowpage == totalpage) {
    // 当前页等于总页数
    str +=
      "<div>" +
      (nowpage - 2) +
      "</div>" +
      "<div>" +
      (nowpage - 1) +
      "</div>" +
      '<div class="pageactive">' +
      nowpage +
      "</div>";
  } else {
    str +=
      "<div>" +
      (nowpage - 1) +
      "</div>" +
      '<div class="pageactive">' +
      nowpage +
      "</div>" +
      "<div>" +
      (nowpage + 1) +
      "</div>";
  }

  $(".repagebtn").html(str);
  $(".repagebtn")
    .find("div")
    .each(function () {
      $(this).removeClass("pageactive");
      if (parseInt($(this).html()) == nowpage) {
        $(this).addClass("pageactive");
      }
    });
  var start = (nowpage - 1) * sinmsg;
  var end = nowpage * sinmsg;
  if (end >= totalmsg) {
    end = totalmsg;
  }
  pagedata(start, end);
}

function pagedata(start, end) {
  var str = "";
  for (var i = start; i < end; i++) {
    str +=
      "<tr>" +
      "    <td>" +
      '        <input type="checkbox" name="tail" id="" class="checksin" />' +
      "    </td>" +
      '    <td class="id">' +
      alldata[i].id +
      "</td>" +
      '    <td class="name">' +
      alldata[i].name +
      "</td>" +
      '    <td class="sex">' +
      alldata[i].sex +
      "</td>" +
      '    <td class="party">' +
      alldata[i].party +
      "</td>" +
      '    <td class="proper">' +
      alldata[i].proper +
      "</td>" +
      '    <td class="level">' +
      alldata[i].level +
      "</td>" +
      "    <td>" +
      '        <span class="ope edit">编辑</span>' +
      '        <span class="ope del">删除</span>' +
      "    </td>" +
      "</tr>";
  }
  $("tbody").html(str);
}

// ---------- 点击切换nowpage start
$(".repagebtn").on("click", "div", function () {
  $(".repagebtn")
    .find("div")
    .removeClass("pageactive");
  $(this).addClass("pageactive");
  nowpage = parseInt($(this).html());
  page();
});
$(".first").on("click", function () {
  nowpage = 1;
  page();
});
$(".end").on("click", function () {
  nowpage = totalpage;
  page();
});
$(".prev").on("click", function () {
  nowpage = nowpage - 1;
  page();
});
$(".next").on("click", function () {
  nowpage = nowpage + 1;
  page();
});
$(".jumpbtn").on("click", function () {
  nowpage = parseInt(
    $(this)
    .prev()
    .find("input")
    .val()
  );
  page();
});
// ---------- 点击切换nowpage end

// ---------- 模态框内容 start
var id;
var flag;
// 编辑
$("tbody").on("click", ".edit", function () {
  id = $(this).parents("tr").find("td").eq(1).html();
  flag = "edit";
  // 渲染模态框内容
  for (var i = 0; i < alldata.length; i++) {
    if (id == alldata[i].id) {
      $(".model .name").find("input").val(alldata[i].name)
      $(".model .sex").find("select").val(alldata[i].sex)
      $(".model .party").find("select").val(alldata[i].party)
      $(".model .proper").find("select").val(alldata[i].proper)
      $(".model .level").find("select").val(alldata[i].level)
    }
  }
  $(".mask").show();
  $(".model").show();
})
// 添加
$(".add").on("click", function () {
  id = alldata[alldata.length - 1].id + 1;
  flag = "add";
  $(".model .name").find("input").val()
  $(".model .sex").find("select").val()
  $(".model .party").find("select").val()
  $(".model .proper").find("select").val()
  $(".model .level").find("select").val()
  $(".model").show();
  $(".mask").show();
})

// 判断如果是编辑，获取内容
$(".true").on("click", function () {
  var name = $(".model .name").find("input").val()
  var sex = $(".model .sex").find("select").val()
  var party = $(".model .party").find("select").val()
  var proper = $(".model .proper").find("select").val()
  var level = $(".model .level").find("select").val()
  if (name == "" || sex == "" || party == "" || proper == "" || level == "") {
    window.alert("请将信息填完整")
    return;
  } else {
    if (flag == "edit") {
      for (var i = 0; i < alldata.length; i++) {
        if (id == alldata[i].id) {
          alldata[i].name = name;
          alldata[i].sex = sex;
          alldata[i].party = party;
          alldata[i].proper = proper;
          alldata[i].level = level;
        }
      }

    } else {
      // 如果是添加，直接添加
      alldata.push({
        id: id,
        name: name,
        sex: sex,
        party: party,
        proper: proper,
        level: level
      })
    }
    sessionStorage.setItem("pagetemp", JSON.stringify(alldata));
    temp = sessionStorage.getItem("pagetemp");
    location.reload();
  }


})
// 取消提交
$(".false").on("click", function () {
  $(".mask").hide();
  $(".model").hide();
})
// ---------- 提交模态内容 end

// ---------- 单项删除 start
$("tbody").on("click", ".del", function () {
  // 弹出框
  var tof = window.confirm("确认删除这条记录么");
  // 判断弹出框选择结果
  if (tof) {
    var id = $(this).parents("tr").find("td").eq(1).html();
    for (var i = 0; i < alldata.length; i++) {
      if (id == alldata[i].id) {
        alldata.splice(i, 1);
        sessionStorage.setItem("pagetemp", JSON.stringify(alldata));
        temp = sessionStorage.getItem("pagetemp");
        location.reload();
      }
    }
  }
})
// ---------- 单项删除 end

// ---------- 批量删除 start
$(".delall").on("click", function () {
  // 弹出框
  var tof = window.confirm("确认删除本页所选内容么");
  // 判断弹出框选择结果
  if (tof) {
    $(".checksin").each(function () {
      if ($(this)[0].checked == true) {
        id = $(this).parent("td").next().html();
        for (var i = 0; i < alldata.length; i++) {
          if (id == alldata[i].id) {
            alldata.splice(i, 1);
          }
        }
      }
    });
    sessionStorage.setItem("pagetemp", JSON.stringify(alldata));
    temp = sessionStorage.getItem("pagetemp");
    location.reload();
  }
})
// ---------- 批量删除 end

// ---------- checkbox的全选全不选功能 start
$(".checkall").on("click", function () {
  // checked是DOM元素的一个属性，需要通过[0]访问
  var flag = $(this)[0].checked;
  $(".checksin").each(function () {
    $(this)[0].checked = flag;
  })
});
$(".checksin").on("click", function () {
  var i = 0;
  $(".checksin").each(function () {
    // 存在一个未选中，则，全选按钮未选中
    if ($(this)[0].checked == false) {
      $(".checkall")[0].checked = false;
    } else {
      // 如果是选中的，累加，和全部长度比较
      i += 1;
      if (i == $(".checksin").length) {
        $(".checkall")[0].checked = true;
      }
    }

  })
});
// ---------- checkbox的全选全不选功能 end

$(".change select").on("change", function () {
  if ($(".change select").val() != "") {
    console.log($(".change select").val());
    sinmsg = $(".change select").val();
    totalpage = Math.ceil(alldata.length / sinmsg)
    page()
  }

})

