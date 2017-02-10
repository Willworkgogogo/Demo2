//接口初探

// Typescript的核心原则就是对值所具有的shape（外形）进行类型检查

// function test(hello: {label: string}) {
//     console.log(hello.label);
// }

// let hey = { age: 20, label: 'wang'};
// test(hey)

// 使用接口来描述上面的例子
interface LabelValue {
    label: string
}
function test(hello: LabelValue) {
    console.log(hello.label)
}

let obj = { name: 'wang', label: 'font-end'};
test(obj);

//可选属性
//接口里的属性不一定全是必须的
interface squareConfig {
    width?: number;
    color?: string;
}

function createSquare(config: squareConfig): {color: string, area: number} {
    let newSquare = { color: 'blue', area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width*config.width; 
    }
    return newSquare;
}
// console.log(createSquare({width: 1000}));


//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 10};



//接口： 1. 描述对象的外形  2，描述函数类型
// 2，描述函数类型， 需要给接口定义一个----调用签名,它就像一个只有参数列表和返回值类型的函数定义， 参数列表里的每个参数都需要名字和类型
interface SearchFunc {
    ( source: string, subString: string ): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }else{
        return true;
    }
}


//可索引类型
//索引签名， 描述了索引和返回值的类型
// interface StringArray {
//     [index: number]: string;
// }



// 类 类型
//实现接口
// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }


// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     };
//     constructor(h: number, m: number) {};
// }


interface ClockConstructor {
    new (hour: number, minute: number);
}
class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number);
}