//charAt()返回在指定位置的字符
var str1="abc";
console.log(str1.charAt(0));//a

//charCodeAt()返回指定位置的字符的Unicode编码
var str2="abc";
console.log(str2.charCodeAt(1));//98

//连接字符串
var a="abc";
var b="def";
var c=a.concat(b);
console.log(c);//abcdef

//检索字符串，indexOf()方法对大小写敏感
var str3="Hello world";
console.log(str3.indexOf("Hello"));//0
console.log(str3.indexOf("World"));//-1
console.log(str3.indexOf("World"));//6

//match()方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
//该方法类似indexOf()和lastIndexOf()但是它返回指定的值，而不是字符串的位置
var str4="1 abc 2 def 3";
console.log(str4.match(/\d+/g));//[ '1', '2', '3' ]

//replace()用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
var str5="abc Def!";
console.log(str5.replace(/abc/,"CBA"));//CBA Def!

//search()方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
//要执行忽略大小写的检索，追加标志i。
//如果没有找到任何匹配的子串，返回-1
var str6="abc DEF!";
console.log(str6.search(/DEF/));//4

//slice()提取字符串的片段，并在新的字符串中返回被提取的部分
var str7="abc def ghk";
console.log(str7.slice(6));//f ghk

//split()把字符串分割为字符串数组
var str8="abc def ghi jkl";
console.log(str8.split(" "));//[ 'abc', 'def', 'ghi', 'jkl' ]
console.log(str8.split(""));//[ 'a', 'b', 'c', ' ', 'd', 'e', 'f', ' ', 'g', 'h', 'i', ' ', 'j', 'k', 'l' ]
console.log(str8.split(" ",3));//[ 'abc', 'def', 'ghi' ]

//toLocaleLowerCase()把字符串转换为小写
var str9="ABC def!";
console.log(str9.toLocaleLowerCase());//abc def!

//toLocalUpperCase()把字符串转换为大写
var str10="ABC def!";
console.log(str10.toLocaleUpperCase());//ABC DEF!

//toLowerCase()把字符串转换为小写
var str11="ABC def!";
console.log(str11.toLowerCase());//abc def!

//toUpperCase()把字符串转换为大写
var str12="ABC def!";
console.log(str12.toUpperCase());//ABC DEF!

//substr()从起始索引号提取字符串中指定数目的字符
var str13="abc def";
console.log(str13.substr(2));//c def
console.log(str13.substr(2,4));//c de

//substring()提取字符串中两个指定的索引号之间的字符
var str14="abc def";
console.log(str14.substring(2));//c def
console.log(str14.substring(2,4));//c

var str15="123456789";
console.log(str15.substr(2));//3456789
console.log(str15.substring(2));//3456789
console.log("123456789".substr(2,5));//34567
console.log("123456789".substring(2,5));//345