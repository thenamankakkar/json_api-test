const fs = require('fs');

let rawdata = fs.readFileSync('emp.json');
let student = JSON.parse(rawdata);
console.log(student.employee);
