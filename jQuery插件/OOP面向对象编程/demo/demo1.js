function A(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(this + '\n')
        console.log('Hello, my name is ' +  this.name)
    }
}

var a1 = new A('wang');
a1.sayHello()