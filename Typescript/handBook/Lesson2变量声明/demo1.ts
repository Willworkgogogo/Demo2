//var 
// function f() {
//     var a = 1;

//     a = 2;
//     var b = g();
//     a = 3;

//     return b;

//     function g() {
//         return a;
//     }
// }
// console.log(f());

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

//立即执行函数解决捕获每次迭代时i的值
// for (var i = 0; i < 10; i++) {
//     (function(i){
//         setTimeout(function(){ console.log(i) }, 100*i)
//     })(i)
// }
