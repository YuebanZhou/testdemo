// localStorage.setItem("temp",["list1","list2","list3"])
// var temp = localStorage.getItem("temp")
// var listArr = temp.split(",")
var listArr = ["list1","list2","list3"]
var end = []
var noend = []
for (var i = 0; i < listArr.length; i++) {
  noend.push(listArr[i])
}

//初始化渲染这个数组
function re() {
  var restr = ""
  for (var i = 0; i < listArr.length; i++) {
    restr += `
          <li>
            <span class="button"></span>
            <span class="text">` + listArr[i] + `</span>
            <input type="text" class="change" autofocus="autofocus">
            <span class="close">X</span>
          </li>
          `
  }
  $(".con ul").html(restr)
  common()
}
//添加元素事件
function add() {
  //添加目标功能
  $(".addtext").keyup(function () {
    if (event.keyCode == "13") {
      var text = $(".addtext").val()
      listArr.push(text);
      noend.push(text);
      var addstr = ""
      addstr += `
      <li>
        <span class="button"></span>
        <span class="text">` + text + `</span>
        <input type="text" class="change" autofocus="autofocus">
        <span class="close">X</span>
      </li>
      `
      $(".con ul").append(addstr)
      $(".addtext").val("")
      text = ""
      common()
    }

  })
}
//删除元素事件
function del() {
  $(".con ul").on("click", ".close", function (event) {
    var ind = $(this).parent().index();
    listArr.splice(ind, 1)
    if ($(this).parent().find(".button").hasClass("bac")) {
      end.splice(ind, 1)
    } else {
      noend.splice(ind, 1)
    }
    $(".con ul li:eq(" + ind + ")").remove()
    common()
  });
}
//重新编辑事件
function edi() {
  $(".con ul").on("click", ".text", function (event) {
    //弹出这个输入框的时候，隐藏其他输入框
    $(this).parent().siblings("li").find(".change").hide()
    //将隐藏的输入框展示出来
    $(this).parent().find(".change").show()
    $(".change").val($(this).text())
    //获取当前点击元素的li的index
    var ind = $(this).parent().index();
    $("li:eq(" + ind + ")").children(".change").keydown(function (e) {
      if (e.keyCode == "13") {
        //给text赋值为当前输入框的值
        var changetext = $(this).val()
        if ($(this).val() == "") {
          changetext = listArr[ind]
        }
        $(this).hide()
        $(this).parent().children(".text").text(changetext)
        listArr[ind]=changetext
        common()
      }
    })
    $("li:eq(" + ind + ")").children(".change").blur(function () {
      //给text赋值为当前输入框的值
      var changetext = $(this).val()
      if ($(this).val() == "") {
        changetext = listArr[ind]
      }
      $(this).hide()
      $(this).parent().children(".text").text(changetext)
      listArr[ind]=changetext
      common()
    })
  });

}
//添加背景色事件
function bac() {
  $(".con ul").on("click", ".button", function (event) {
    $(this).toggleClass("bac");
    if ($(this).hasClass("bac")) {
      var endtext = $(this).parent().find(".text").text()
      end.push(endtext)
      var indexnoend = noend.indexOf(endtext)
      noend.splice(indexnoend, 1)
    } else {
      // localStorage.removeItem("index"+$(this).parent().index())
      var noendtext = $(this).parent().find(".text").text()
      noend.push(noendtext)
      var indexend = end.indexOf(noendtext)
      end.splice(indexend, 1)
    }
    common()
  });
}
//tab切换事件
function tab() {
  $(".radio .end").click(function () {
    var endstr = ""
    for (var i = 0; i < end.length; i++) {
      endstr += `
        <li>
          <span class="button bac"></span>
          <span class="text">` + end[i] + `</span>
          <input type="text" class="change" autofocus="autofocus">
        </li>
      `
    }
    $(".con ul").html(endstr)
  })
  $(".radio .noend").click(function () {
    var noendstr = ""
    for (var i = 0; i < noend.length; i++) {
      noendstr += `
        <li>
          <span class="button"></span>
          <span class="text">` + noend[i] + `</span>
          <input type="text" class="change" autofocus="autofocus">
        </li>
      `
    }
    $(".con ul").html(noendstr)
  })
  $(".radio .all").click(function () {
    var str = ""
    for (var i = 0; i < listArr.length; i++) {
      str += `
        <li>
          <span class="button"></span>
          <span class="text">` + listArr[i] + `</span>
          <input type="text" class="change" autofocus="autofocus">
          <span class="close">X</span>
        </li>
      `
    }
    $(".con ul").html(str)
    for (var j = 0; j < end.length; j++) {
      for (var k = 0; k < listArr.length; k++) {
        if (end[j] == listArr[k]) {
          $(".con li:eq(" + k + ")").find(".button").addClass("bac")
        }
      }
    }
    //$(".con ul").html(str)
  })
}

function common() {
  $(".d1").text(listArr.length)
  $(".d2").text(end.length)
  $(".d3").text(noend.length)
  localStorage.setItem("temp", listArr)

}
window.onload = function () {
  re()
  add()
  del()
  edi()
  bac()
  tab()
  common()
}