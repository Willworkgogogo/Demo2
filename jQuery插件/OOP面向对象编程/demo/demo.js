function House(name, age, price, mianji) {
    this.name = name;
    this.age = age;
    this.price = price;
    this.mianji = mianji;
}
House.prototype.howMuch = function() {
    // console.log(this)
    return this.price * this.mianji
}

var myHouse = new House('wang', 57, 8000, 1);
var name = myHouse.name,
    age = myHouse.age,
    price = myHouse.howMuch();

console.log(name + ',' + age + ',' + price);