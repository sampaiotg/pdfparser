var json2xls = require('json2xls');
var fs = require('fs');
var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}

var json2 = {
    foo: 'bar2',
    qux: 'moo2',
    poo: [1,2,3,4],
    stux: new Date()
}

var xls = json2xls([json,json2]);

fs.writeFileSync('data.xlsx', xls, 'binary');