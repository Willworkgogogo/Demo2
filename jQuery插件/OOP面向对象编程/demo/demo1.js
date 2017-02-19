function A(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(this + '\n')
        console.log('Hello, my name is ' +  this.name)
    }
}

var a1 = new A('wang');
// a1.sayHello()

function B(name) {
    this.name = name || 'b';
}
B.prototype.sayHello = function() {
    console.log('Hello, my name is ' +  this.name)
}
var b1 = new B();
// b1.sayHello();


//将方法写在构造函数中， 是因为要访问构造函数内部的私有变量
function Person(name, family) {
    this.name = name;
    this.family = family;

    var records = [{type: 'in', amount: 0}];

    //添加新对象到数组
    this.addTransaction = function(trans) {
        if(trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
            records.push(trans);
        }
    }
    
    //查看records
    this.look = function() {
        console.log(records)
    }
    
    //
    this.balance = function() {
        var total = 0;
        records.forEach(function(records) {
            if(records.type == 'in') {
                total += records.amount;
            }else {
                total -= records.amount;
            }
        })
        return total;
    };
};

Person.prototype.getFull = function() {
    return this.name + ", " + this.family;
}

Person.prototype.getProfile = function() {
    return this.getFull() + ", total balance: " + this.balance;
}

var person1 = new Person('wang', 'yellow-mountain');
person1.addTransaction({"type": 'out', "amount": 1})
person1.look();