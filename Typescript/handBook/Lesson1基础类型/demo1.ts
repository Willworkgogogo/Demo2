// 布尔值
let isDone: boolean = false; 


// 数字 number; Typescript 支持二进制和八进制
let decLinteral: number = 6
let hexLiteral: number = 0xf00d


// 字符串
let name1: string = 'bob';
name1 = "will";
//模板字符串 可以定义多行文本和内嵌表达式`` ${ expr }
let name2: string = 'Tom';
let age: number = 37;
let sentence: string = `Hello, my name is ${name2}

    I'll be ${ age + 1 } years old next month`


//数组
//1.元素类型后面接上[]
let list: number[] = [1,2,3];
//2.使用数组泛型
//Array<元素类型>
let list1: Array<number> = [1,2,3];
//多类型数组
let list3: any[] = [1, false, 'hello'];

//元组Tuple
//表示一个已知元素数量和类型的数组， 但元素的类型不必相同
//取值
let x: [string, number, boolean];
x = ['hello', 12, true]; 


//枚举 enum
//为一组数值赋予友好的名字
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
let d: string = Color[1];
//默认从0开始为元素编号， 可以手动修改 如 enum Color { Red = 1, Green = 3, Blue = 9 };


//任意值
//情况： 为不清楚类型的变量指定一个类型 any, 如来自用户输入   或是 第三方代码库
//作用是直接通过编译阶段检查
//用any来标记
let notSure: any = 4;
notSure = 'hello';
notSure = false;


//空值
//void 表示没有任何类型
//场景：当一个函数没有返回值时
function warnUser(): void{
    alert('This is my warning message');
}
//声明一个void类型的变量， 只能赋予它两个值  undefined 和 null
let unusable: void = undefined;


//Null类型



//Undefined类型


//Never类型
//是那些总是会抛出异常或根本就不会有返回值的函数表达式  或 箭头函数表达式   的返回值类型


//类型断言