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
console.log(createSquare({ width: 1000 }));
