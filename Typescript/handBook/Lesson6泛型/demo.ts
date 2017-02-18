// function hello<T>(name: T): T {
//     return name
// }

// let student1 = hello('wang')

function logging<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

function logging2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}