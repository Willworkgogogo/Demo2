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