# 正则表达式解析

## 字符

### \

- 将下一个字符标记为特殊字符、或一个原义字符、或一个八进制转义符。

```javascript
// "\\"将被匹配成"\"，"\("将被匹配成"("
// str="(123)"时输出success
// str="\(123\)"时输出error
var reg = /\(123\)/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
// str="\("时输出success
// str="("时输出success
var reg = /\(/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### ^和\$

- 以^后面的字符开头，以\$前面的字符结束

```javascript
// str="1"时输出success
var reg = /^1/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
// str="12"时输出success
// str="1"时输出error
// str="q1"时输出error
// str="1q"时输出error
var reg = /^1\d/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \*和+和?

- 用来匹配前面的字符出现的次数
- \*匹配零次或多次
- +匹配一次或多次
- ?匹配零次或一次

```javascript
// str="abc"时输出success
// str="bb"时输出success
// str="a"时输出error
var reg = /a*b+c?/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### {n}和{n,}和{n,m}

- 用来匹配前面的字符出现的次数
- {n}匹配 n 次
- {n,}匹配至少 n 次
- {n,m}匹配至少 n 次，至多 m 次

```javascript
// str="abbcc"时输出success
// str="aabbccc"时输出success
// str="abc"时输出error
var reg = /a{1}b{2,}c{2,7}/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### ?

- ?紧跟限制字符时表示非贪婪模式
- 字符串为"oooo"时，"o+?"只匹配一个字符 o，不加?时，将匹配所有的 o

### .

- 匹配除"\n"之外的任意字符

### x|y

- 匹配 x 或者 y

```javascript
// str="abbcc"时输出success
// str="aabbccc"时输出success
// str="abc"时输出error
var reg = /a{1}b{2,}c{2,7}/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

```javascript
// str="z"时输出success
// str="food"时输出success
// str="zood"时输出success
var reg = /z|food/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
// str="z"时输出error
// str="food"时输出success
// str="zood"时输出success
var reg = /(z|f)ood/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### [xyz]

- 字符集合，匹配所包含的任意一个字符

```javascript
// str="asd"时输出success
// str="zxc"时输出success
// str="sdf"时输出error
var reg = /[abc]/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### [^xyz]

- 负值字符集合，匹配不包含的字符，只要存在即为真

```javascript
// str="abc"时输出error
// str="abd"时输出success
// str="qqq"时输出success
var reg = /[^abc]/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### [a-z]

- 字符集合，匹配 a-z 所有小写字母

```javascript
// str="abc"时输出success
// str="a11"时输出success
// str="111"时输出error
var reg = /[a-z]/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### [^a-z]

- 负值字符集合，匹配 a-z 所有小写字母之外的字符

```javascript
// str="1qw"时输出success
// str="aaa"时输出error
// str="Aaa"时输出success
var reg = /[^abc]/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \b

- 匹配一个单词的边界

```javascript
// str="qqabc"时输出success
// str="qabcq"时输出error
// str="abc"时输出success
var reg = /abc\b/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \B

- 匹配非单词的边界

```javascript
// str="qqabc"时输出error
// str="qabcq"时输出success
// str="abc"时输出error
var reg = /abc\B/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \d

- 匹配一个数组字符

```javascript
// str="1qw"时输出success
// str="qwe"时输出error
// str="123"时输出success
var reg = /\d/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \D

- 匹配一个非数字字符

```javascript
// str="1qw"时输出success
// str="qwe"时输出success
// str="123"时输出error
var reg = /\D/;
if (!reg.test(str)) {
  console.log("error");
} else {
  console.log("success");
}
```

### \f 和\n 和\r 和\t 和\v 和\s 和\S 和\w 和\W

- \f 匹配换页符
- \n 匹配换行符
- \r 匹配回车符
- \t 匹配制表符
- \v 匹配垂直制表符
- \s 匹配任何空白字符，包括空格、制表符、换页符等等
- \S 匹配任何非空白字符
- \w 匹配包括下划线的任何单词字符
- \W 匹配任何非单词字符

## 实例

### 用户名

```javascript
// 字符3至16位，包含小写字母，数字，下划线，横线
var reg = /^[a-z0-9_-]{3,16}$/;
```

### 密码

```javascript
// 字符6至18位，包含小写字母，数字，下划线，横线
var reg = /^[a-z0-9_-]{6,18}$/;
```

### 十六进制值

```javascript
// 字符以#开头，#出现0次或者1次，后面是6位或者3位字符，字符内容是小写字母a-f或者数字0-9
var reg = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
```

### 电子邮箱

```javascript
// 字符分成三部分
// 第一部分，小写字母a-z，数字0-9，下划线，点，短横线组成
// 第二部分，数字，小写字母a-z，点，短横线组成
// 第三部分，小写字母a-z，点组成，字符有2到6位
var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
// 字符分成四部分
// 第一部分，小写字母a-z，数字。出现一次或多次
// 第二部分，点，小写字母a-z，数字。出现0次或多次
// 第三部分，又分成两部分，前部分是数字，小写字母a-z，后部分是数字，小写字母a-z。后部分出现0次或1次，如果出现，前后部分用短横连接
// 第四部分，点，出现至少一次，至多两次，小写字母a-z，出现一次或多次。第四部分整体出现一次或多次
var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
```

### URL

```javascript
// https中s字符出现0次或1次，后面跟两个斜杠。这部分出现0次或1次
// 数字，小写字母，点，短横线。出现一次或多次。点。
// 小写字母a-z，点。出现至少2次至多6次
// 斜杠，任意单词字符，点，短横线。出现零次或多次。
// 斜杠，出现零次或多次
var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
```

### IP 地址

```javascript
var reg = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
var reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
```

### HTML 标签

```javascript

var reg = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
```

### Unicjavascriptde 编码中汉字的范围

```javascript
// unicode码查询，汉字起始和结束4E00-9FA5
var reg = /^[\u4E00-\u9FA5]+$/;
```
