/**
 * Created by wangweiwei on 17/3/21.
 */
class Klass{
    name: string;
    age: number;
    constructor (name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + ":" + this.age + ":"
    }
}

class Student extends Klass {
    sex:number;
    constructor (sex:number) {
        super("wang", 80);
        this.sex = sex;
    }
    print() {
        return this.name + ":" + this.age + ":" + this.sex;
    }
}

var p = new Student(0);
alert(p.print());