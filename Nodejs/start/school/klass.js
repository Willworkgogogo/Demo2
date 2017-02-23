var add = require('./student');
var addT = require('./teacher');

function show(teacher, students) {
    addT.addT(teacher);
    students.forEach(function (val, index) {
        add.add(val)
    })
}

exports.show = show;