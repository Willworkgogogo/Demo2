var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
var Richo = (function (_super) {
    __extends(Richo, _super);
    function Richo() {
        return _super.call(this, "Richo") || this;
    }
    return Richo;
}(Animal1));
var Employee1 = (function () {
    function Employee1(theName) {
        this.name = theName;
    }
    ;
    return Employee1;
}());
var animal = new Animal1("Gost");
var horse = new Richo();
var Employee = new Employee1("Bob");
