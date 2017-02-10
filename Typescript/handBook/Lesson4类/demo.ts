class Greeter {
    constructor (message: string) {
        this.greeting = message;
    }
    greeting: string;
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/**
 * 声明一个Greeter类
 * 这个类有三个成员: 一个叫greeting的属性， 一个构造函数， 一个greet方法
 * greeter是类Greeter的一个实例
 * 它会调用之前定义的构造函数， 创建一个Greeter类型的新对象， 并执行构造函数初始化它
 * */ 



//继承
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
        //?
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);