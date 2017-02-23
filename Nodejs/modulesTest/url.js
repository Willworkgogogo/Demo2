var url = require('url');

var str = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

//第二个参数设置为true， 方便获取具体参数值
var obj = url.parse(str, true, true);

console.log(obj)