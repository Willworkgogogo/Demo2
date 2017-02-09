//块作用域
//当用let声明一个变量， 它使用的是词法作用域 或 块作用域
//if语句块 、 函数体内 、 for循环

// try {
//  throw new Date(); // 抛出当前时间对象 
// } catch (e) {
//  console.log(e.toLocaleString()); // 使用本地格式显示当前时间 
// }

const numLiveForCat = 9;
const kitty = {
    name: "Tom",
    numLives: numLiveForCat
}

//error
// kitty = {
//     name: "wang",
//     numLives: numLiveForCat
// }

kitty.name = "wang";

//数组解构
let input = [1, 2, 3, 4];
let [first] = input;
// console.log(first);
let [,,,last] = input;
// console.log(last);

//对象解构


//展开 ， 数组展开 和 对象展开    和解构相反

