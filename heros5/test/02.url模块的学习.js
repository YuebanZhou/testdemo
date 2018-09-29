const url = require('url')

const str = 'http://127.0.0.1:3000/index.html?id=10&name=zs&gender=man#title'
const str2 = 'http://127.0.0.1:3000/info?id=2&age=20&gender=man'
let result=url.parse(str)
let result2 = url.parse(str2, true)
console.log(result);
console.log(result.query.id)

// 解析出来的 URL 地址对象，身上有两个比较关键的属性：
//  pathname : 表示请求的URL地址（不包含querystring和hash， 也不包含 IP地址和 端口号）
//  query : 这个属性存放了所有的查询字符串  我们如果希望 得到 对象类型的 query, 在调用  url.parse 的时候，第二个参数要传递一个 true， 表示说：使用 Node内置的 querystring 核心模块去解析 URL 地址中的查询字符串；

// url   和   querystring   模块 作用有什么不同：
//  url： 解析URL地址
//  querystring： 只能解析类似于查询字符串这样的内容


/* Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: '127.0.0.1:3000',
  port: '3000',
  hostname: '127.0.0.1',
  hash: '#title',
  search: '?id=10&name=zs&gender=man',
  query: 'id=10&name=zs&gender=man',
  pathname: '/index.html',
  path: '/index.html?id=10&name=zs&gender=man',
  href: 'http://127.0.0.1:3000/index.html?id=10&name=zs&gender=man#title' } */