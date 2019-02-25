// 取数据
var temp = localStorage.getItem("temp");
// 若没有缓存
if (temp == null) {
  // 模拟数据
  var alldata = [
    { list: "eat", status: 0 },
    { list: "sleep", status: 1 },
    { list: "bitdou", status: 0 }
  ];
  // 数据存储
  localStorage.setItem("temp", JSON.stringify(alldata));
}
// 获取对象数据
var listAll = JSON.parse(temp);
redata();

// 点击事件，改变状态，用事件代理
$(".alldata ul").on("click", ".check", function() {
  var status;
  var index = $(this)
    .parent("li")
    .index();
  if ($(this).hasClass("bac")) {
    // 已完成变未完成
    status = 0;
  } else {
    // 未完成变已完成
    status = 1;
  }
  listAll[index].status = status;
  redata();
});

// 添加
$(".add").on("click", function() {
  $(".model1 input").val("");
  $(".model1").show();
});
$(".model1 .yes").on("click", function() {
  var val = $(this)
    .prev()
    .val();
  if (val === "" || val == null || val == undefined) {
  } else {
    listAll.push({
      list: val,
      status: 0
    });
      redata();    
    $(".model1").hide();
  }
});

// 编辑
var indexmodel2;
$(".alldata ul").on("click", ".edit", function() {
  $(".model2 input").val(
    $(this)
      .prev()
      .html()
  );
  $(".model2").show();
  indexmodel2 = $(this)
    .parent("li")
    .index();
});
$(".model2 .yes").on("click", function() {
  var val = $(this)
    .prev()
    .val();
  if (val === "" || val == null || val == undefined) {
    $(".model2").hide();
  } else {
    listAll[indexmodel2].list = val;
    redata();
    $(".model2").hide();
  }
});
// 取消隐藏
$(".no").click(function() {
  $(".model").hide();
});

// 删除
$(".alldata ul").on("click", ".close", function() {
  var index = $(this)
    .parent("li")
    .index();
  listAll.splice(index, 1);
  redata();
});

var adddate = "";
function getTime() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var date = myDate.getDate();

  var hour = myDate.getHours();
  var minutes = myDate.getMinutes();
  var second = myDate.getSeconds();

  if (month < 10) {
    month = 0 + month;
  }
  if (date < 10) {
    date = 0 + date;
  }
  if (hour < 10) {
    hour = 0 + hour;
  }
  if (minutes < 10) {
    minutes = 0 + minutes;
  }
  if (second < 10) {
    second = 0 + second;
  }

  adddate =
    year +
    "年" +
    month +
    "月" +
    date +
    "日" +
    " " +
    hour +
    ":" +
    minutes +
    ":" +
    second;
}
// 渲染列表
function redata() {
  var end = [];
  var noend = [];
  getTime();
  //console.log(adddate);
  var str = "";
  for (var i = 0; i < listAll.length; i++) {
    if (listAll[i].status == 0) {
      noend.push(listAll[i]);
      str +=
      "<li>"+
        "<span class='check'></span>"+
        "<span class='msg'>"+listAll[i].list+"</span>"+
        "<span class='edit'>编辑</span>"+
        "<span class='close'>X</span>"+
      "</li>"
    } else {
      end.push(listAll[i]);
      str +=
      "<li class='line'>"+
        "<span class='check bac'></span>"+
        "<span class='msg'>"+listAll[i].list+"</span>"+
        "<span class='edit'>编辑</span>"+
        "<span class='close'>X</span>"+
      "</li>"
    }
  }
  $(".alldata ul").html(str);
  $(".all span").html(listAll.length);
  $(".end span").html(end.length);
  $(".noend span").html(noend.length);
  localStorage.setItem("temp", JSON.stringify(listAll));
}
