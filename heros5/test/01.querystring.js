const querystring = require('querystring')

var str = 'name=zs&age=20&gender=%E7%94%B7';

var result = querystring.parse(str)
console.log(result)