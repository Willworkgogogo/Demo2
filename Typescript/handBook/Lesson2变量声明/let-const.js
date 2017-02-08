//块作用域
/**
 * 1. 当用let声明一个变量， 它使用的是词法作用域 或 块作用域
 * 2. 声明它之前即使是同一作用域也不能使用， 此块区域称为 ‘时间死区’ ， 不能在let语句之前访问它们
 * */ 

//if语句块 、 函数体内 、 for循环
try {
    throw new Date(); // 抛出当前时间对象 
}
catch (e) {
    console.log(e.toLocaleString()); // 使用本地格式显示当前时间 
}
