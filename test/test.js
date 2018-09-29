var pageNo; //当前页码
var totalPage; //总页数
var totalRecord; //总记录数
var rowNum = 10; //每页默认几条
var row;
var deldata;
var cont;
var idf;
$(function () {
  //初始化
  initmsg();
  //正则验证收货人
  $(document).on("blur", ".CNEE", function () {

    var myReg = /^[a-zA-Z\u4e00-\u9fa5_]{2,16}$/;
    if (!myReg.test($(this).val())) {
      //$(this).val("");
      $(this).focus();
      $(this).css("border", "1px solid #a70404");
      showAlert.warning("请输入正确格式（ 字母 中文）");
      return;
    } else {
      $(this).css("border", "0px");
    }

  })
  //正则验证手机号
  $(document).on("blur", ".phonenum", function () {

    if (!(/^1[345678]\d{9}$/.test($(this).val()))) {
      //$(this).val("");
      $(this).focus();
      $(this).css("border", "1px solid #a70404");
      showAlert.warning("请输入正确的手机号格式");
      return;
    } else {
      $(this).css("border", "0px");
    }

  })
  //正则验证邮编
  $(document).on("blur", ".POSTCODES", function () {

    var POSTCODESReg = /^[0-9]{6}$/;
    if (!POSTCODESReg.test($(this).val())) {
      $(this).val("");
      $(this).focus();
      $(this).css("border", "1px solid #a70404");
      showAlert.warning("请输入正确格式（六位数字）");
      return;
    } else {
      $(this).css("border", "0px");
    }

  })
  //出现添加收货信息弹窗
  var pid = '';
  $(document).on("click", ".addaddres", function () {
    cont = 1;
    $(".addmsg").show();
    $(".provinces").find("option").remove(); //省份的option清空
    $(".citys").find("option").not(".clds").remove(); //城市的option清空
    $(".company").find("option").remove(); //公司的option清空
    $(".CNEE").val("");
    $(".phonenum").val("");
    $(".sendadress").val("");
    $(".POSTCODES").val("");
    //省
    $.ajax({
      url: "../../receiveAdmin/queryAreasList",
      type: 'post',
      data: {
        pid: ""
      },
      dataType: 'jsonp',
      success: function (msg) {
        //console.log(msg);
        var dic = msg.data;
        $(".provinces").append("<option class='cld' value=''>--请选择--</option>");
        for (var i = 0; i < dic.length; i++) {
          $(".provinces").append("<option value = " + dic[i].AREAS_ID + ">" + dic[i].AREAS_NM + "</option>");
        }
      }
    })
  });
  //市
  $(document).on("change", ".provinces", function () {
    $(".citys").empty();
    pid = $(".provinces").val();
    $(".citys").empty();
    $.ajax({
      url: "../../receiveAdmin/queryAreasList",
      type: 'post',
      data: {
        pid: pid
      },
      dataType: 'jsonp',
      success: function (msg) {
        //console.log(msg);
        var dic = msg.data;
        for (var i = 0; i < dic.length; i++) {
          $(".citys").append("<option value = " + dic[i].AREAS_ID + ">" + dic[i].AREAS_NM + "</option>");
        }
        var val = $(".citys").attr("val");
        $(".citys").find("option[value=" + val + "]").attr("selected", "true");
      },
      complete: function () {
        //运维公司
        $(".company").empty();
        //console.log($(".citys").val());
        $.ajax({
          url: "../../Company/findAreasToCompany",
          data: {
            cityId: $(".citys").val()
          },
          type: 'post',
          dataType: 'jsonp',
          success: function (msg) {
            //console.log(msg);
            var dic = msg.data;
            $(".company").append("<option class='cld' value=''>--请选择--</option>");
            for (var i = 0; i < dic.length; i++) {
              $(".company").append("<option value = " + dic[i].id + ">" + dic[i].name + "</option>");
            }
          }
        })
      }
    })
  })
  $(document).on("change", ".citys", function () {
    //运维公司
    $(".company").empty();
    $.ajax({
      url: "../../Company/findAreasToCompany",
      data: {
        cityId: $(this).val()
      },
      type: 'post',
      dataType: 'jsonp',
      success: function (msg) {
        //console.log(msg);
        var dic = msg.data;
        $(".company").append("<option class='cld' value=''>--请选择--</option>");
        for (var i = 0; i < dic.length; i++) {
          $(".company").append("<option value = " + dic[i].id + ">" + dic[i].name + "</option>");
        }
      }
    })
  })
  //添加收货信息保存
  $(document).on("click", ".save", function () {


    if ($(".CNEE").val() == "") {
      $(".CNEE").attr("placeholder", "请填写");
      showAlert.warning("请填写收货人");
      return;
    }
    if ($(".phonenum").val() == "") {
      $(".phonenum").attr("placeholder", "请填写");
      showAlert.warning("请填写手机号");
      return;
    }
    if ($(".POSTCODES").val() == "") {
      $(".POSTCODES").attr("placeholder", "请填写");
      showAlert.warning("请填写邮编");
      return;
    }
    if ($(".provinces").val() == "") {
      showAlert.warning("请选择省");
      return;
    }
    if ($(".citys").val() == "") {
      showAlert.warning("请选择城市");
      return;
    }

    if ($(".company").val() == "") {
      showAlert.warning("请选择运维公司");
      return;
    }
    if ($(".sendadress").val() == "") {
      $(".sendadress").attr("placeholder", "请填写");
      showAlert.warning("请填写收货地址");
      return;
    }

    if (cont == 1) { //添加
      var urlS = "../../receiveAdmin/save";
      addOrEdit(urlS, "");
    } else { //编辑
      var urlS = "../../receiveAdmin/update";
      //console.log(idf);
      addOrEdit(urlS, idf);
    }

  });
  //编辑
  $(document).on("click", ".del_edit", function () {
    $(".CNEE,.phonenum,.sendadress,.POSTCODES").css("border", "0px");
    $(".company").empty();
    $(".provinces").empty();
    $(".citys").empty();
    idf = $(this).parents("tr").attr("trid");
    var dCITY = $(this).parents("tr").attr("CITY");
    cont = 2;
    $(".addmsg").show();
    //编辑回显
    $.ajax({
      url: "../../receiveAdmin/selectById/" + idf,
      type: 'post',
      dataType: 'jsonp',
      success: function (msg) {
        //console.log(msg);
        $(".company").attr("val", msg.data.companyId);
        $(".provinces").attr("val", msg.data.province);
        $(".citys").attr("val", msg.data.city);
        $(".CNEE").val(msg.data.consignee);
        $(".phonenum").val(msg.data.phone);
        $(".sendadress").val(msg.data.rceivAddress);
        $(".POSTCODES").val(msg.data.postcodes);
        var flast = msg.data.flag;
        if (flast == "01") {
          $(".setReceive input").prop("checked", true);
        } else {
          $(".setReceive input").prop("checked", false);
        }
        //省
        province();
        citys(msg.data.province);
        //运维公司
        companys(dCITY);
      }
    })
  })
  //批量删除
  $(".allDel").on("click", function () {
    if ($(".chk:checked").length > 0) {
      //删除操作
      deldata = {
        yesdel: function () {
          //点击确认键 后的后续操作
          kkpager.selectPage(1);
          var arridel = []; //创建新数组
          $(".chk:checked").each(function () {
            var trid = $(this).parents("tr").attr("trid");
            arridel.push(trid); //获取ID
            $(this).parents("tr").hide(); //在页面消失						
          });
          var triddel = arridel.join(","); //获取到的id转换成字符串	
          //console.log(triddel);
          delMess(triddel); //调用函数	
        },
        nodel: function () {
          //点击 否 的后续执行
          $(".chk:checked").prop("checked", false); //选中的框取消掉
          $("#chkAll").prop("checked", false); //全选取消掉
        },
        text: "确认要删除吗？"
      }
      //调用删除函数
      showAlert.delmsg(deldata);
    } else {
      showAlert.error('请选择！');
    }
  })
  //单个删除
  $(document).on("click", ".delones", function () {
    $(".qCtrl_operate").hide();
    var triddel = $(this).parents("tr").attr("trid");
    deldata = {
      yesdel: function () {
        kkpager.selectPage(1);
        //点击确认键 后的后续操作
        $.ajax({
          url: "../../receiveAdmin/delect/" + triddel,
          type: 'POST',
          dataType: 'jsonp',
          success: function (msg) {
            showAlert.success('删除成功!');
            setTimeout(function () {
              window.location.reload();
            }, 2000)
          },
          error: function () {
            showAlert.error('删除失败!');
          }
        })
      },
      nodel: function () {
        //点击 否 的后续执行
        $(".chk:checked").prop("checked", false); //选中的框取消掉
        $("#chkAll").prop("checked", false); //全选取消掉
      },
      text: "确认要删除吗？"
    }
    showAlert.delmsg(deldata);
  })
  //查询
  $(document).on("click", "#search", function () {
    kkpager.selectPage(1);
    initmsg(pageNo);
  })
  //选择行时调用ajax
  $(document).on("change", "#showROLs", function () {
    kkpager.selectPage(1);
    initmsg(pageNo);
  })
  //设为默认收货人
  $(document).on("click", ".setDefault", function () {
    $(".qCtrl_operate").hide();
    idf = $(this).parents("tr").attr("trid");
    var fCITY = $(this).parents("tr").attr("CITY");
    var fCOMPANY_ID = $(this).parents("tr").attr("COMPANY_ID");
    var PHONE1 = $(this).parents("tr").attr("PHONE");
    deldata = {
      yesdel: function () {
        $.ajax({
          url: "../../receiveAdmin/update",
          type: 'POST',
          data: {
            id: idf,
            city: fCITY,
            phone: PHONE1,
            companyId: fCOMPANY_ID,
            flag: "01" //01是默认
          },
          dataType: 'jsonp',
          success: function (msg) {
            showAlert.success('设置成功!');
            initmsg($(".curr").html());
          },
          error: function () {
            //autoLogin(jqXHR);
          }
        })
      },
      nodel: function () {},
      text: "确认要设置吗？"
    }
    showAlert.delmsg(deldata);

  })
})
//删除的ajsx
function delMess(triddel) {
  $.ajax({
    url: "../../receiveAdmin/delect/" + triddel,
    type: 'POST',
    dataType: 'jsonp',
    success: function (msg) {
      showAlert.show('删除成功!');
      setTimeout(function () {
        window.location.reload();
      }, 2000)
    },
    error: function () {
      //autoLogin(jqXHR);
    }
  })
}
//初始化
function initmsg(pageNo) {
  $("#tabid tbody").empty();
  rowNum = $("#showROLs").val();
  var mouSearch = $(".mouSearch").val();
  var area = $(".title").find("span").length;
  if (area == "") {
    var valArea = "";
  } else {
    var valArea = $(".title").find("span:eq(" + (area - 1) + ")").attr("data-code");
  }
  //console.log("模糊：" + mouSearch);
  //console.log("地区：" + valArea);
  $.ajax({
    url: "../../receiveAdmin/queryForList",
    data: {
      limit: rowNum,
      thisPage: pageNo,
      dvArea: valArea,
      atrName: mouSearch
    },
    type: 'post',
    dataType: 'jsonp',
    success: function (msg) {
      $('#tabid tbody').empty();
      //console.log(msg);
      totalPage = msg.data.maxPage;
      totalRecord = msg.data.total;
      //console.log("初始化中的totalPage："+totalPage);
      //console.log("初始化中的totalRecord："+totalRecord);
      kkpager.total = totalPage;
      kkpager.totalRecords = totalRecord;
      //			initpage(pageNo,totalRecord,totalPage);
      initpage(pageNo, totalRecord, totalPage)
      //table数据展示
      showData(msg);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //autoLogin(jqXHR);
    }
  });
}
//解析数据
function showData(msg) {
  $("#tabid tbody").empty();
  var list = msg.data.list;
  for (var i = 0; i < list.length; i++) {
    var CITY = list[i].CITY; //市id
    var CITY_NAME = list[i].CITY_NAME; //市
    var CONSIGNEE = list[i].CONSIGNEE; //收货人
    var FLAG = list[i].FLAG;
    var ID = list[i].ID;
    var NAME = list[i].NAME; //公司名
    var COMPANY_ID = list[i].COMPANY_ID; //公司id
    var PHONE = list[i].PHONE;
    var POSTCODES = list[i].POSTCODES; //邮编
    var PROVINCE_NAME = list[i].PROVINCE_NAME; //省
    var RCEIV_ADDRESS = list[i].RCEIV_ADDRESS; //收货地址
    //做判断
    if (FLAG == 01) {
      var FLAGNM = "是";
    } else {
      var FLAGNM = "否";
    }
    var thispagef = (msg.data.thisPage) - 1;
    var rowf = msg.data.limit;
    var tr = $("<tr trid=" + ID + " PHONE = '" + PHONE + "' CITY = " + CITY + " COMPANY_ID=" + COMPANY_ID + " ></tr>");
    $("<td>").append("<input type='checkbox' class='chk'>").appendTo(tr);
    $("<td>").appendTo(tr).html((i + 1) + thispagef * rowf);
    $("<td>").appendTo(tr).html(PROVINCE_NAME);
    $("<td>").appendTo(tr).html(CITY_NAME);
    $("<td>").appendTo(tr).html(NAME);
    $("<td>").appendTo(tr).html(CONSIGNEE);
    $("<td>").appendTo(tr).html(PHONE);
    $("<td>").appendTo(tr).html(RCEIV_ADDRESS);
    $("<td>").appendTo(tr).html(POSTCODES);
    $("<td>").appendTo(tr).html(FLAGNM);
    $("<td class='accMrelative2hand'>").appendTo(tr).html("<div class='purchaseRelative del_edit'><i><img src='../../img/edit.png'></i><a class='qcSwitch_show chkPwd_color'>[编辑]</a></div><div class='changeRelative'id='show_All'><i><img src='../../img/gengduo.png'></i><a id='show_menu' style='color:#ffcc66!important;'>[更多]</a><img class='right_arrow' src='../../img/right_arrow.png'><ul class='qCtrl_operate' '><li class='qcState_show setDefault'><a>设为默认收货人</a></li><li class='qcSwitch_show delones'><a>删除</a></li></ul></div>");
    tr.appendTo("#tabid");
  }
  showROL.autoHideOrShow(); //展示隐藏列的展示功能
  window.parent.autoHeight();
}
//编辑、添加
function addOrEdit(urls, id) {
  $(".qCtrl_operate").hide();
  $(".addmsg").hide();
  var province = $(".provinces").val();
  var city = $(".citys").val();
  var consignee = $(".CNEE").val();
  var phone = $(".phonenum").val();
  var companyId = $(".company").val();
  var rceivAddress = $(".sendadress").val();
  var postcodes = $(".POSTCODES").val();
  if ($(".setReceive").find("input").prop("checked") == true) {
    var flag = "01";
  } else {
    var flag = "00";
  }
  $.ajax({
    url: urls,
    type: 'POST',
    data: {
      id: id,
      province: province,
      city: city,
      consignee: consignee,
      phone: phone,
      companyId: companyId,
      rceivAddress: rceivAddress,
      postcodes: postcodes,
      flag: flag
    },
    dataType: 'jsonp',
    success: function (msg) {
      //console.log(msg);
      if (msg.msg == 250) {
        showAlert.error("电话号已被占用，占用人信息是：收货人：" + msg.data.consignee + " 运维公司：" + msg.data.companyNm + " 手机号：" + msg.data.phone);
      } else {
        if (msg.status == "200") {
          showAlert.success('成功!');
          initmsg(pageNo);
        } else {
          showAlert.error(msg.msg);
        }
      }
    },
    error: function () {
      //autoLogin(jqXHR);
    }
  })
}
//分页
function initpage(pageNo, totalRecord, totalPage) {
  //console.log("进入分页");
  //console.log("分页中的totalPage："+totalPage);
  //console.log("分页中的totalRecord："+totalRecord);
  kkpager.generPageHtml({
    pno: pageNo,
    totalRecords: totalRecord,
    total: totalPage,
    mode: 'click', //默认值是link，可选link或者click
    click: function (pageNo) {
      this.selectPage(pageNo);
      initmsg(pageNo);
    }
  }, true)
}
//省填充
function province() {
  $(".provinces").empty();
  $.ajax({
    url: "../../receiveAdmin/queryAreasList",
    type: 'post',
    data: {
      pid: "1"
    },
    dataType: 'jsonp',
    success: function (msg) {
      //console.log(msg);
      var dic = msg.data;
      for (var i = 0; i < dic.length; i++) {
        $(".provinces").append("<option value = " + dic[i].AREAS_ID + ">" + dic[i].AREAS_NM + "</option>");
      }
      var val = $(".provinces").attr("val");
      $(".provinces").find("option[value=" + val + "]").attr("selected", "true");
    }
  })
}
//市填充
function citys(pid) {
  $(".citys").empty();
  $.ajax({
    url: "../../receiveAdmin/queryAreasList",
    type: 'post',
    data: {
      pid: pid
    },
    dataType: 'jsonp',
    success: function (msg) {
      //console.log(msg);
      var dic = msg.data;
      for (var i = 0; i < dic.length; i++) {
        $(".citys").append("<option value = " + dic[i].AREAS_ID + ">" + dic[i].AREAS_NM + "</option>");
      }
      var val = $(".citys").attr("val");
      $(".citys").find("option[value=" + val + "]").attr("selected", "true");
    }
  })
}
//运维公司
function companys(cityId) {
  $(".companys").empty();
  $.ajax({
    url: "../../Company/findAreasToCompany",
    data: {
      cityId: cityId
    },
    type: 'post',
    dataType: 'jsonp',
    success: function (msg) {
      //console.log(msg);
      var dic = msg.data;
      $(".company").append("<option class='cld' value=''>--请选择--</option>");
      for (var i = 0; i < dic.length; i++) {
        $(".company").append("<option value = " + dic[i].id + ">" + dic[i].name + "</option>");
      }
      var val = $(".company").attr("val");
      $(".company").find("option[value=" + val + "]").attr("selected", "true");
    },
    complete: function () {
      //运维公司
      $(".company").empty();
      //console.log($(".citys").val());
      $.ajax({
        url: "../../Company/findAreasToCompany",
        data: {
          cityId: $(".citys").val()
        },
        type: 'post',
        dataType: 'jsonp',
        success: function (msg) {
          //console.log(msg);
          var dic = msg.data;
          $(".company").append("<option class='cld' value=''>--请选择--</option>");
          for (var i = 0; i < dic.length; i++) {
            $(".company").append("<option value = " + dic[i].id + ">" + dic[i].name + "</option>");
          }
        }
      })
    }
  })
}