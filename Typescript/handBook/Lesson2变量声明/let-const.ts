//块作用域
//当用let声明一个变量， 它使用的是词法作用域 或 块作用域
//if语句块 、 函数体内 、 for循环

try {
 throw new Date(); // 抛出当前时间对象 
} catch (e) {
 console.log(e.toLocaleString()); // 使用本地格式显示当前时间 
}