var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangweiwei on 17/3/21.
 */
var Klass = (function () {
    function Klass(name, age) {
        this.name = name;
        this.age = age;
    }
    Klass.prototype.print = function () {
        return this.name + ":" + this.age + ":";
    };
    return Klass;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(sex) {
        _super.call(this, "wang", 80);
        this.sex = sex;
    }
    Student.prototype.print = function () {
        return this.name + ":" + this.age + ":" + this.sex;
    };
    return Student;
}(Klass));
var p = new Student(0);
alert(p.print());
