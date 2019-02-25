var temp = sessionStorage.getItem("personmsg");
var alldata = JSON.parse(temp);
if (temp == null) {
    $.ajax({
        url: "./msg.json",
        type: "post",
        dataType: "json",
        async: false,
        success: function (data) {
            sessionStorage.setItem("personmsg", JSON.stringify(data.personmsg));
            temp = sessionStorage.getItem("personmsg");
            alldata = JSON.parse(temp);

        },
        error: function (err) {
            console.log(err);
        }
    });
}
reperson(alldata)

function reperson(alldata) {
    var str = "";
    str += `
    <div>
        <div>
            <img src="` + alldata[0].personimg + `" alt="" id="imgContent">
        </div>
    </div>
    <div>
        <label for="personname">用户名</label>
        <input type="text" id="personname" value="` + alldata[0].personname + `">
    </div>
    <div>
        <label for="personname2">账号</label>
        <input type="text" id="personname2" value="` + alldata[0].personname2 + `">
    </div>
    <div>
        <label for="tellnum">绑定手机号</label>
        <input type="text" id="tellnum" value="` + alldata[0].tellnum + `">
    </div>
    <div>
        <label for="mail">绑定邮箱</label>
        <input type="text" id="mail" value="` + alldata[0].mail + `">
    </div>
    <div>
        <label for="sex">性别</label>
        <input type="text" id="sex" value="` + alldata[0].sex + `">
    </div>
    <div>
        <label for="job">职位</label>
        <input type="text" id="job" value="` + alldata[0].job + `">
    </div>
    <div>
        <label for="ip">IP地址</label>
        <input type="text" id="ip" value="` + alldata[0].ip + `">
    </div>
    <div>
        <label for="more">备注</label>
        <textarea rows="4" cols="60" id="more">` + alldata[0].more + `</textarea>
    </div>
    `
    $(".block").html(str)
}
$(".save").on("click", function () {
    var personname = $("#personname").val();
    var personname2 = $("#personname2").val();
    var tellnum = $("#tellnum").val();
    var mail = $("#mail").val();
    var sex = $("#sex").val();
    var job = $("#job").val();
    var ip = $("#ip").val();
    var more = $("#more").val();
    alldata[0].personname = personname
    alldata[0].personname2 = personname2
    alldata[0].tellnum = tellnum
    alldata[0].mail = mail
    alldata[0].sex = sex
    alldata[0].job = job
    alldata[0].ip = ip
    alldata[0].more = more
    sessionStorage.setItem("personmsg", JSON.stringify(alldata));
    temp = sessionStorage.getItem("personmsg");
    alldata = JSON.parse(temp);
    msgalert('success', '保存成功');
    reperson(alldata)
})