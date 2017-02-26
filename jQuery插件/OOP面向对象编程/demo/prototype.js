function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.hi = function() {
	console.log('Hi, my name is ' + this.name + ', I\'m' + this.age + 'years old.' )
}

Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;

Person.prototype.walk = function() {
	console.log(this.name + ' is walking.')
}

function Student(name, age, className) {
	Person.call(this, name, age);
	this.className = className;
}


// 实现Student继承Person上的方法
//Object.create()创建一个空对象， 原型指向Person.prototype
//这种方式，Student即继承了Person原型的方法， 还不影响自身扩展方法
// Student上的同名方法  可以覆盖父类上的方法
Student.prototype = Object.create(Person.prototype);

// 此时Student.prototype.constructor 指向了Person， 需要手动指回Student
Student.prototype.constructor = Student;

// hi方法会覆盖Person的hi方法
Student.prototype.hi = function() {
	console.log('Hi, my name is ' + this.name + ', I\'m' + this.age + 'years old. and from '  + this.className)
}

Student.prototype.learn = function(subject) {
	console.log(this.name + 'is learning' + subject + 'at' + this.className)
}


var wei = new Student('wangweiwei', 27, 'Class2, Grade 2');
wei.hi();
console.log(wei.LEGS_NUM)
wei.walk();
wei.learn('English');
