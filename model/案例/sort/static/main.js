var data = [{
    "id": 1,
    "name": "abc",
    "num": 123,
    "level": "一二三四"//\u4e00\u4e8c\u4e09\u56db
}, {
    "id": 5,
    "name": "acb",
    "num": 456,
    "level": "一转"//\u4e00\u8f6c
}, {
    "id": 2,
    "name": "bac",
    "num": 234,
    "level": "成功功"//\u6210\u529f\u529f
}, {
    "id": 3,
    "name": "a12",
    "num": 345,
    "level": "七日"//\u4e03\u65e5
}, {
    "id": 4,
    "name": "a32",
    "num": 567,
    "level": "礼拜"//\u793c\u62dc
}]
data.sort(sortBy('num', true));
re(data);

function re(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        str +=
            '<tr>' +
            '    <td>' + data[i].id + '</td>' +
            '    <td>' + data[i].name + '</td>' +
            '    <td>' + data[i].num + '</td>' +
            '    <td>' + data[i].level + '</td>' +
            '</tr>'
    }
    $("tbody").html(str)
}
function sortBy(attr, rev) {
    //第二个参数没有传递 默认升序排列
    if (rev == undefined) {
        rev = 1;
    } else {
        rev = (rev) ? 1 : -1;
    }
    return function (a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
            return rev * -1;
        }
        if (a > b) {
            return rev * 1;
        }
        return 0;
    }
}