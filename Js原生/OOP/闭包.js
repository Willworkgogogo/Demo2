function A() {
	var b = "hello 我属于A函数私有变量"
	function N() {
		console.log("print b : " + b)
	}
	return N
}

// A()() //print b : hello 我属于A函数私有变量


// 创建全局变量
function B() {
	var b = "hello 我属于B函数私有变量"
	function M() {
		console.log("print b : " , b)
	}
	inner = M
}

// B()
// inner() //print b :  hello 我属于B函数私有变量




// 循环中的闭包
function F() {
	var i, arr = [];
	for (i = 0; i < 3 ;i++) {
		arr[i] = function () {
			return i;
		}
	}
	return arr;
}
// var arr = F()
// console.log(arr[0]())  // 返回的都是3, 都是拿到i的引用值，即最终值3



// 完善上面的例子， 拿到0、1、2
function F() {
	var i, arr = [];
	for (i = 0; i < 3; i++) {
		arr[i] = (function (x) {
			return function() {
				return x
			}
		}(i))
	}
	return arr
}

// var arr = F()
// console.log("0 :", arr[0](), " 1 : ", arr[1]() , " 2 : ", arr[2]()) //0 : 0  1 :  1  2 :  2


// 方法抽离出来
function P() {
	var i, arr = [];
	function binder(x) {
		return function () {
			return x
		}
	}
	for ( i = 0; i < 3; i++) {
		arr[i] = binder(i)
	}

	return arr
}

var arr = P()
console.log("0 :", arr[0](), " 1 : ", arr[1]() , " 2 : ", arr[2]()) //0 : 0  1 :  1  2 :  2




// 迭代器
function setUp(arr) {
	var timer = 0
	return function next(){
		return console.log(arr[timer++])
	}
}
var next = setUp(['a', 'b', 'c'])
next() //a
next() //b
next() //c
next() // undefined














