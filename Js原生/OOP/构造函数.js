function C(name) {
	this.a = name
}

var c = new C('wang')
// console.log(c.a)

// console.log(c instanceof C)


// 对象拷贝是对对象的引用，会改变原对象的值
var original = { howmany: 1};
var mycopy = original;
mycopy.howmany = 100;
// console.log(original.howmany) // 100



// 统计一个字符串中某个字符出现的次数
var str = 'To be, or not to be, that is the question.',
	count = 0
	position = str.indexOf('e')

	while (position !== -1) {
		count++
		position = str.indexOf('e', position + 1)
	}

	// console.log(count)

// 分装
// 查询字符串str  , 查询字母char 
function getCountOfChar(str, char) {
	var count = 0,
		position = str.indexOf(char)

	while (position > -1) {
		count++
		position = str.indexOf(char, position + 1)
	}

	return count
}
getCountOfChar('To be, or not to be, that is the question.', 'e')
console.log(count)
