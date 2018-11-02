var str = change(430); //定义字符串
console.log(str);
var num = 0;
for (var i = 0; i < str.length; i++) {
    //遍历字符串，如果字符串中某一项值为1，让num自加1
    if (str[i] == 1) {
        num += 1;
        //判断num为4的时候，输出i
        if (num == 4) {
            console.log(i);
        }
    }
}

function change(number) {
    var temparr = []; //定义一个空数组
    var temp; //定义中间变量
    var temostr = '';
    //循环，处理正整数
    while (number > 0) {
        //整数模2，得到的余数赋值给temp
        temp = number % 2;
        //余数必定为0或者1，push进数组
        temparr.push(temp);
        //如果是2的倍数，继续模。如果不是2的倍数，向下取整之后，继续模
        number = Math.floor(number / 2);
        //直到数模除成0
    }
    while (temparr.length != 0) {
        //数组反向，一个个加到字符串上
        temostr += temparr.pop().toString();
    }
    return temostr; //返回最终结果
}