//接口初探
function test(hello) {
    console.log(hello.label);
}
var obj = { name: 'wang', label: 'font-end' };
test(obj);
function createSquare(config) {
    var newSquare = { color: 'blue', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
readonly;
x: number;
readonly;
y: number;
var p1 = { x: 10, y: 10 };
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var Clock = (function () {
    function Clock() {
    }
    return Clock;
}());
